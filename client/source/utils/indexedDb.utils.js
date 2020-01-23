let db = null;
export const initIndexedDB = listOfMonthsData => {
  //   console.log('res...', res);
  //   const openRequest = indexedDB.open('calendar', 1);

  //   openRequest.onupgradeneeded = e => {
  //     db = e.target.result;
  //     for (let i = 0; i < res.length; i++) {
  //       if (!db.objectStoreNames.contains(res[i].monthOf)) {
  //         db.createObjectStore(`${i}${res[i].monthOf}`, {
  //           autoIncrement: true
  //         });
  //       }
  //     }
  //   };

  //   openRequest.onerror = e => {
  //     console.error(`error ${e.target.error}`);
  //   };

  //   openRequest.onsuccess = e => {
  //     db = e.target.result;
  //     console.log(db.objectStoreNames);
  //     Object.keys(db.objectStoreNames).map(month => {
  //       const transaction = db.transaction(db.objectStoreNames[month], 'readwrite');
  //       const store = transaction.objectStore(db.objectStoreNames[month]);
  //       let data = res.filter(item => {
  //         return item.monthOf === db.objectStoreNames[month];
  //       });

  //       const daysInThatMonth = data[0].days;
  //       let payload = {
  //         monthOf: db.objectStoreNames[month]
  //       };
  //       payload.days = [];
  //       for (let i = 1; i <= daysInThatMonth.length; i++) {
  //         payload.days.push({ day: i, status: false });
  //       }
  //       store.add(payload);
  //     });
  //   };
  // };

  // export const getAll = cb => {
  //   let getAllMonthData = [];
  //   Object.keys(db.objectStoreNames).map(month => {
  //     const transaction = db.transaction(db.objectStoreNames[month], 'readonly');
  //     const store = transaction.objectStore(db.objectStoreNames[month]);

  //     let getRequest = store.get(1);
  //     getRequest.onsuccess = e => {
  //       const response = e.target.result;
  //       getAllMonthData.push(response);
  //     };
  //     transaction.oncomplete = e => {
  //       cb(getAllMonthData);
  //     };
  //   });
  // };

  let db;
  const openRequest = indexedDB.open('calendar');
  openRequest.onupgradeneeded = e => {
    db = e.target.result;
    db.onerror = e => {};

    listOfMonthsData.forEach(elem => {
      let month = elem.monthOf;
      db.createObjectStore(month, {
        keyPath: 'day'
      });
    });
    // const store = db.createObjectStore('jan', { keyPath: 'day' });
    // const dayIndex = store.createIndex('by_day', 'day', { unique: true });
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
    // const transaction = db.transaction('jan', 'readwrite');
    // const store = transaction.objectStore('jan');

    // const obj = {
    //   day: 1,
    //   status: true
    // };

    // store.add(obj);
  };
};
