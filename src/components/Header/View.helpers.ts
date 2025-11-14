export const getGreetingData = (hour: number) => {
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
