import * as jwt from 'jsonwebtoken';
import jwtsecret from '../jwtsecret.json';

console.log(jwtsecret);

export const sign = payload => {
  return jwt.sign(payload, jwtsecret, {
    expiresIn: '8h',
  });
};

export const decode = header => {
  const [bearer, token] = header.split(' ');
  if ('bearer' === bearer.toLowerCase()) {
    try {
      const payload = jwt.verify(token, jwtsecret);
      return payload;
    } catch (error) {
      console.error(error);
    }
  }
  return undefined;
};

// export const validate = header => {
//   return !!decode(header);
// };

// export const validate = header => {
//   const [bearer, token] = header.split(' ');
//   if ('bearer' === bearer.toLowerCase()) {
//     try {
//       const payload = jwt.verify(token, jwtSecret);
//       // console.log(payload);
//       return true;
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   return false;
// };

// import * as moment from "moment";

// const { DateTime } = require("luxon");
// const jwtSecret = require('uuid').v4(); // unique every start. For prod.

// export const jwtSecret = DateTime.local().toFormat("yyyyLLdd"); // unique every day.
// export const jwtSecret = moment().format("YYYYMMDD"); // unique every day.
// export const jwtSecret = dayjs().format("YYYYMMDD");
// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: jwtSecret
// };

// const strategy = new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
//   try {
//     console.log("jwt_payload", jwt_payload);
//     const now = Date.now() / 1000;
//     if (now > jwt_payload.exp) {
//       console.log("exp expired");
//       // fail
//       return done(null, false);
//     }
//     // proceed
//     return done(null, jwt_payload);
//   } catch (error) {
//     console.error(error);
//     // fail
//     return done(error, false);
//   }
// });

// passport.use(strategy);

// module.exports = { jwtSecret };
