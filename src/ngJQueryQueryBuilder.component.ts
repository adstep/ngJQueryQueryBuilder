interface IQueryBuilderJQuery extends ng.IAugmentedJQuery {
  queryBuilder(options: any);
}

const QUERY_BUILDER_CHANGE_EVENT_NAMES: string[] = [
  'afterUpdateRuleValue.queryBuilder',
  'afterUpdateRuleFilter.queryBuilder',
  'afterUpdateRuleOperator.queryBuilder',
  'afterUpdateGroupCondition.queryBuilder',
  'afterReset.queryBuilder',
  'afterMove.queryBuilder',
  'afterSetFilters.queryBuilder',
  'afterInvert.queryBuilder',
  'afterDeleteRule.queryBuilder',
  'afterDeleteGroup.queryBuilder'
];

class QueryBuilderController {
  private queryBuilderElement: any;
  private options: any;
  private builder: any;

  /** @ngInject */
  constructor(private $element: IQueryBuilderJQuery) {
    if ($element.length !== 1) {
      throw new Error('Failed to initialize QueryBuilder!');
    }

    this.queryBuilderElement = $element[0];
    (<any>$($element)).queryBuilder(this.options);
    this.builder = this.queryBuilderElement.queryBuilder;

    $($element).on(QUERY_BUILDER_CHANGE_EVENT_NAMES.join(' '), () => {
      console.log(this.builder.validate());
      console.log(this.builder.getRules());
    });
  }
}

export const queryBuilder: angular.IComponentOptions = {
  template: '<div></div',
  controller: QueryBuilderController,
  bindings: {
    options: '=',
    builder: '='
  }
};