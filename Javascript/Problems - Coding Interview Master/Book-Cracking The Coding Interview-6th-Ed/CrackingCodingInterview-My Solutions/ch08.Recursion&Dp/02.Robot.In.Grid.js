
const maze = [
    [true, false, true],
    [true, false, true],
    [true, true, true]
];


function robotPath(maze){
    if(!maze || maze.length === 0) return null;
    let path = [];
    let fp = new Set();

    if(getPath(maze, path, fp, maze.length-1, maze[0].length-1)){
        return path;
    }

    return null;
}

function getPath(maze, path, fp, r, c){
    if(r < 0 || c < 0 || !maze[r][c]){
        return false;
    }

    let p = r + "_" + c;
    let point = [r, c];

    if(fp.has(p)){
        return false;
    }

    let isAtOrigin = r === 0 && c === 0;

    if(isAtOrigin || getPath(maze, path, fp, r, c-1) || getPath(maze, path, fp, r-1, c)){
        path.push(point);
        return true;
    }

    fp.add(p);
    return false;
}


console.log("Result : ", robotPath(maze));