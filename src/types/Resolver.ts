export type Resolver<A = {}, P = {}, R = {}> = {
    [key: string]: {
        [key: string]: (parent: P, args: A, context: any, info?: any) => R;
    };
};
