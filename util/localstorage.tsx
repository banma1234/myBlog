const localstorage = (storageItem: string) => {
  const item = storageItem;
  return {
    getItem() {
      if (typeof window !== "undefined") {
        return localStorage.getItem(item);
      }
      return "light";
    },

    setItem(value: any) {
      localStorage.setItem(item, JSON.stringify(value));
    },

    removeItem() {
      localStorage.removeItem(item);
    },
  };
};

export default localstorage;
