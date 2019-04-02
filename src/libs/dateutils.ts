import { addDays, addMinutes, format } from 'date-fns';
import { DateTimeFormatter } from 'js-joda';

// import * as joda from "js-joda";

// https://github.com/js-joda/js-joda/blob/master/CheatSheet.md
// Convert from a javascript Date or moment
// obtain a LocalTime instance from a JavaScript Date
// the manual way
// var t = LocalDateTime.ofInstant(Instant.ofEpochMilli(new Date().getTime()));

// the recommended way with the javascript temporal
// t = LocalDateTime.from(nativeJs(new Date()));
// d = LocalDate.from(nativeJs(new Date()));

// converting from a moment is workings the same way
// d = LocalDateTime.from(nativeJs(moment()));
// d = LocalDate.from(nativeJs(moment()));

// joda.LocalDateTime.now().to
// const jd = joda.ZonedDateTime.now();
// console.log(joda.convert(jd).toDate()); // returns a javascript Date
// joda.convert(localDate).toEpochMilli(); // returns the epochMillis

const formatters: DateTimeFormatter[] = [
  'yyyy-MM-dd HH:mm:ss',
  'yyyy-MM-dd',
  'yyyy/MM/dd',
  'dd/MM/yyyy',
  'ddMMyyyy',
  "yyyy-MM-dd'T'HH:mm:ss.SSS",
  "yyyy-MM-dd'T'HH:mm:ss.SSSX",
].map(p => DateTimeFormatter.ofPattern(p));

export const parse = dateString => {
  for (const formatter of formatters) {
    try {
      // console.log(new Date());
      const results = formatter.parse1(dateString);
      // console.log(results);
      return formatters[0].format(results);
    } catch (error) {
      console.error(error.message);
    }
  }
  return undefined;
};

export const renderDatetime = date => {
  return format(date, 'MMM DD (ddd) h:mma');
};

export const renderDate = date => {
  return format(date, 'MMM DD (ddd)');
};

// const results = parse("2018-08-19T09:14:37.510Z");
// console.log(results);

// console.log("Done.");

const main = async () => {
  for (let index = 0; index < 10; index++) {
    console.log(renderDate(addDays(new Date(), index)));
    console.log(renderDatetime(addMinutes(new Date(), index)));
  }
  console.log('Done.');
};
if (require.main === module) {
  main();
}
