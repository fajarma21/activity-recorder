const determineDate = (date: number) => {
  const threshold = 5 * 60 * 1000;

  const now = Date.now();
  const diff = now - date;
  return Math.abs(diff) <= threshold ? date : now;
};

export default determineDate;
