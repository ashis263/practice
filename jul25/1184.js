function distanceBetweenBusStops(distance, start, destination) {
  let clockWideDistance = 0;
  let antiClockwiseDistance = 0;
  let minimumDistance;

  let lowIndex, highIndex;

  if (start < destination) {
    lowIndex = start;
    highIndex = destination;
  } else {
    lowIndex = destination;
    highIndex = start;
  }

  for (let i = lowIndex; i < highIndex; i++) {
    clockWideDistance += distance[i];
  }

  for (let i = highIndex; i < distance.length; i++) {
    antiClockwiseDistance += distance[i];
  }

  for (let i = 0; i < lowIndex; i++) {
    antiClockwiseDistance += distance[i];
  }

  clockWideDistance > antiClockwiseDistance
    ? (minimumDistance = antiClockwiseDistance)
    : (minimumDistance = clockWideDistance);

  return minimumDistance;
}