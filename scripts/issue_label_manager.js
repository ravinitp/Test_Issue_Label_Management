
module.exports = ({github, context}) => {
//     console.log(context.payload.client_payload.value)
    const query = `query($owner:String!, $name:String!, $label:String!) {
              repository(owner:$owner, name:$name){
                issues(first:100, labels: [$label]) {
                  nodes {
                    id
                  }
                }
              }
            }`;
    const variables = {
        owner: context.repo.owner,
        name: context.repo.repo,
        label: 'Pending Engineering'
    }
    const result = github.graphql(query, variables);
    console.log(result);
    return context.payload.client_payload.value;
}
