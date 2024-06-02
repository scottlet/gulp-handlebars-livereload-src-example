import { CONSTS } from '~/consts';
import Logger from '~/log';

/**
 * This is a test of entrypoint $name-$version.js
 */
(function example() {
  const logger = Logger();

  logger(`this is a test of entrypoint ${CONSTS.NAME}-${CONSTS.VERSION}.js`);
})();
