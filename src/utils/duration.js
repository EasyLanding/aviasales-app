export default function duration(duration) {
  return Math.ceil(duration / 60) + 'ч ' + (duration % 60) + 'м'
}
