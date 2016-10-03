import './standalone.js';

import {queryBuilder} from './ngJQueryQueryBuilder.component';

export default angular.module('ngJQueryQueryBuilder', [])
    .component('queryBuilder', queryBuilder);