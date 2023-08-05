#!/usr/bin/env node
// console.log("Working fine");
// (node:29296) ExperimentalWarning: Watch mode is an experimental feature and might change at any time
// (Use `node --trace-warnings ...` to show where the warning was created)
// Working fine
// Completed running 'index'

//path of interpreter and CLI
// console.log(process.argv)

// const yargs=require("yargs");
// const {argv}=yargs(process.argv);

//inquirer is using async await

const inquirer=require("inquirer");
const printTenMoves=async(PokemonName)=>{
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`);
    const pokemon=await response.json();
    const moves=pokemon.moves.map(({move})=>move.name);
    const tenMoves=moves.slice(0,10);
    console.log(tenMoves);
};
const prompt=inquirer.createPromptModule()
prompt([{
    type:"input",
    name:"pokemon",
    message:"Enter the name of the pokemon: "
}]).then((answers)=>{
    const pokemon=answers.pokemon;
    printTenMoves(pokemon);
});

// const server=http.createServer((req,res)=>{
//     if(req.url==="/")
//     {
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.end("<h1>Home Page</h1>");
//     }
//     else if(req.url==="/PokeApi")
//     {
//         res.writeHead(200,{"Content-Type":"application/json"});
//         res.end(JSON.stringify({message:"Welcome to PokeApi"}));
//     }
// });
// server.listen(7000,()=>{
//     console.log("Server is listening on port 7000");
// });
//try and catch

// try
// {
//     if(argv.pokemon)
//     {
//         printTenMoves(argv.pokemon);
//     }
// }
// catch(err)
// {
//     console.log(err);
// }
// printTenMoves("pikachu");
// printTenMoves("charizard");
// printTenMoves(argv.pokemon);