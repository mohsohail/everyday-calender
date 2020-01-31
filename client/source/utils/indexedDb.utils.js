let db = null;
export const initIndexedDB = listOfMonthsData => {
  const openRequest = indexedDB.open('calendar');
  openRequest.onupgradeneeded = e => {
    db = e.target.result;
    db.onerror = e => {};

    listOfMonthsData.forEach(elem => {
      let month = elem.monthOf;
      if (!db.objectStoreNames.contains(month)) {
        db.createObjectStore(month, {
          keyPath: 'day'
        });
      }
    });
  };

  openRequest.onerror = e => {};

  openRequest.onsuccess = e => {
    db = e.target.result;

    Object.keys(db.objectStoreNames).map(month => {
      const transaction = db.transaction(db.objectStoreNames[month], 'readwrite');
      const store = transaction.objectStore(db.objectStoreNames[month]);
      let currentMonth = listOfMonthsData.filter(item => {
        return item.monthOf === db.objectStoreNames[month];
      });

      const daysInCurrentMonth = currentMonth[0].days;
      for (let i = 1; i <= daysInCurrentMonth; i++) {
        store.add({
          day: i,
          status: false
        });
      }
    });
  };
};

export const getmonthsAndDaysDataFromIDB = cb => {
  let monthsAndDaysData = [];
  Object.keys(db.objectStoreNames).map(month => {
    const transaction = db.transaction(db.objectStoreNames[month], 'readonly');
    const store = transaction.objectStore(db.objectStoreNames[month]);

    const getRequest = store.get(1);
    getRequest.onsuccess = e => {
      // const response = e.target.result;
      // monthsAndDaysData.push(response);
    };

    // transaction.oncomplete = e => {
    //   cb(monthsAndDaysData);
    // };
  });
};
