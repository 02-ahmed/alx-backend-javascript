export default function iterateThroughObject(reportWithIterator) {
  const employeesStringArray = [...reportWithIterator].join(' | ');
  return employeesStringArray;
}
