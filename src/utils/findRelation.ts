import {People} from "../types";

function findRelation(data: People[], source: string, target: string): string[][]{

    let graph: { [key in string]: string[] } = {};

    data?.forEach((item) => {
        graph[item.name] = item.friends;
    });

    const connectionPathArr: string[][] = [];
    let path = [source]

    let visited: {[key in string]: boolean} = {}


    function findConnectionRecursively(source: string, target: string, path: string[], visited: {[key in string]: boolean}) {

        if (visited[source]) return;
        visited[source] = true;

        graph[source]?.forEach((friend) => {
            if (friend === target) {
                // we found connection path. now we set parent and target friend
                path.push(target)
                connectionPathArr.push(path);
            } else {
                // check friend connection...
                let newPath = [...path, friend]

                findConnectionRecursively(
                    friend,
                    target,
                    newPath,
                    visited
                );
            }
        });
    }

    findConnectionRecursively(source, target, path, visited);

    return connectionPathArr
}

export default findRelation