// code your solution here
// index.js

function superbowlWin(record) {
  const win = record.find(season => season.result === "W");
  return win ? win.year : undefined;
}