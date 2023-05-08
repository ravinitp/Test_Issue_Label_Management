
module.exports = async ({github, context}) => {
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
    // console.log(context.issue.number);
    // github.rest.issues.createComment({
    //     issue_number: context.issue.number,
    //     owner: context.repo.owner,
    //     repo: context.repo.repo,
    //     body: '👋 comment from action'
    // });
    // console.log(result);
    return result;
}
