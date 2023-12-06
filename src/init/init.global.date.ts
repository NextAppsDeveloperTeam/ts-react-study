import dayjs from 'dayjs';

const FORMAT = 'YYYY-MM-DD HH:mm:ss';

declare global {
  // eslint-disable-next-line no-var
  function dateToString(dt?: Date): string;
}

globalThis.dateToString = (dt) => {
  return dayjs(dt).format(FORMAT);
};
