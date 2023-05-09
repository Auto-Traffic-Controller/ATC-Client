export function timeFormatting(timestamp: string) {
  return `${timestamp.replace("-", " ").split(":")[0]}시 ${
    timestamp.split(":")[1]
  }분`;
}
