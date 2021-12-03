import { configure } from 'mobx';

type Options = Parameters<typeof configure>[0];

export function configureStore(overrrideOptions?: Options) {
  const options: Options = {
    enforceActions: 'always',
    computedRequiresReaction: true,
    observableRequiresReaction: false,
    reactionRequiresObservable: true,
    disableErrorBoundaries: false,
    safeDescriptors: true,
    ...overrrideOptions,
  };

  configure(options);
}
