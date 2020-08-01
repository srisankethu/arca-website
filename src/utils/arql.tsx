type Operator = 'and' | 'or' | 'equals'
interface Tags {
    [key:string]: string
}

interface Query {
    op: string
    expr1: string | Query
    expr2: string | Query
}

export function query(tags: Tags, operator: Operator){
    return Object.entries(tags).reduce((previous: Query|null, current: [string, string]): Query => {
        if (!previous) {
            return {
                op: 'equals',
                expr1: current[0],
                expr2: current[1]
            };
        }
        return {
            op: operator,
            expr1: {
                op: 'equals',
                expr1: current[0],
                expr2: current[1]
            },
            expr2: previous
        }
    },null);
}
