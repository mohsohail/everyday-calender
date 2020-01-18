let db = null;
export const initIndexedDB = res => {
  const openRequest = indexedDB.open('calendar', 1);

  openRequest.onupgradeneeded = e => {
    db = e.target.result;
    for (let i = 0; i < res.length; i++) {
      if (!db.objectStoreNames.contains(res[i].monthOf)) {
        db.createObjectStore(`${res[i].monthOf}`, {
          autoIncrement: true
        });
      }
    }
  };

  openRequest.onerror = e => {
    console.error(`error ${e.target.error}`);
  };
  openRequest.onsuccess = e => {
    db = e.target.result;

    Object.keys(db.objectStoreNames).map(month => {
      const transaction = db.transaction(db.objectStoreNames[month], 'readwrite');
      const store = transaction.objectStore(db.objectStoreNames[month]);
      let data = res.filter(item => {
        return item.monthOf === db.objectStoreNames[month];
      });

      const daysInThatMonth = data[0].days;
      let payload = {
        monthOf: db.objectStoreNames[month]
      };
      payload.days = [];
      for (let i = 1; i <= daysInThatMonth.length; i++) {
        payload.days.push({ status: false });
      }
      store.add(payload);
    });
  };
};

export const getAll = () => {
  let getAllMonthData = [];
  Object.keys(db.objectStoreNames).map(month => {});
  const transaction = db.transaction();
};
