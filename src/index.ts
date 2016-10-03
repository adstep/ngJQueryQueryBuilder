import './standalone.js';

import {queryBuilder} from './ngJQueryQueryBuilder.component';

angular.module('ngJQueryQueryBuilder', [])
    .component('queryBuilder', queryBuilder);