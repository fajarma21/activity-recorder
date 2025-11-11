export const getGreetingData = () => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return 'morning';
  } else if (hour < 18) {
    return 'afternoon';
  } else if (hour < 21) {
    return 'evening';
  } else {
    return 'night';
  }
};
