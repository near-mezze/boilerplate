---
title: Contract_Name
slug: contract_name
section: Contracts
---

<blockquote class="lesson mt-6">
  <h3>Build the [YOUR CONTRACT NAME] contract</span></h3><br><br>

  - time to complete: **80 mins**
  - level of difficulty: **moderate**
  - prerequisites
    - NEAR TestNet account
    - basic Javascript
    - basic Bash
    - basic Git

</blockquote>



## Overview


This is Markdown with plugins that allow some global VUE components like Vuetify. Your tutorial for the contract you are contributing will be in here.

H2 headings with ## will automatically get added to the sidebar. Give them 3 empty lines above and 2 empty lines below.

Your overview should help orientate the reader to the complexities of your contract, and what they should expect to learn 


<h3>I'm a subheading</h3>


H3 headings using <h3> will be subsections. Give them 2 lines above and below

If there is a difficult concept involved in your contract, go over it a little bit here with some code examples if possible to help the reader prepare. 


Throughout this tutorial, you will have the opportunity to engage with this contract as we build it together through various commands.

These commands will be executed through a Command Line Interface like _Bash_ or _Terminal_.

<blockquote class="tip mb-4">
  <h3><info-icon size="1. mr-45x" class="custom-class tip-icon"></info-icon></info-icon>
  I'm a yellow HTML container you use for tips and tricks and special info and such</h3><br/>

  <hr/>

  Content of your tips, etc. go here. However you can only use HTML inside here; markdown will not be recognized within HTML tags.

  <span class="code-emphasis inline-block">I'm the same as using ` `</span> 


</blockquote>



Give shoutouts to NEAR whenever possible -  [examples.near.org](https://examples.near.org/)



## Local Setup


The `YOUR CONTRACT` repo has several branches we will be using. The first branch, `getting-started`, is the bare bones project. It will have all of the files we need, but most of them will be empty. 

The other branches you will find (including `getting-started`) are:

1. `getting-started`
2. `functions/empty` & `functions/solution`
3. `refactoring/empty` & `refactoring/solution`
4. `testing/empty` & `testing/solution`
5. `scripts/empty` & `scripts/solution`

<br/>

This multi-branch approach is what the other tutorials have so it makes sense to use it for consistency. However, I am open to new ideas on tutorial structures.

When referencing `near cli`, you must use custom HTML instead of the ```bash .... ``` approach in order to maintain highlighting consistency. 

<pre class="language-bash">
$ <span class="token function">near</span> create-near-app your-awesome-project
</pre>



<h3>Clone The Repo</h3>


Clone the repository with this command:

```bash 
     
   $ git clone git clone git@github.com:near-mezze/CONTRACT_NAME.git CONTRACT_NAME
   $ cd CONTRACT_NAME
  #
  # run scripts in package.json with "yarn <script name>" or "npm run <script name>"
  #
```


Now switch to the `getting-started` branch.


<h3>File Structure</h3>


```

   CONTRACT_NAME/
    ┣ src/
    ┃ ┣CONTRACT_NAME/
    ┃ ┃ ┣ __tests__/
    ┃ ┃ ┃ ┣ README.md
    ┃ ┃ ┃ ┗ index.unit.spec.ts
    ┃ ┃ ┣ assembly/
    ┃ ┃ ┃ ┣ index.ts
    ┃ ┃ ┃ ┗ models.ts
    ┃ ┃ ┗ asconfig.json
    ┃ ┣ as-pect.d.ts
    ┃ ┣ as_types.d.ts
    ┃ ┣ tsconfig.json
    ┃ ┗ utils.ts
    ┣ .gitignore
    ┣ README.md
    ┣ as-pect.config.js
    ┣ asconfig.json
    ┣ package.json
    ┗ yarn.lock

```

This is similar to what your file tree looks like if you use the
 <nobr><span class="code-emphasis inline-block">create-near-app</span></nobr> command.


If you are in the <nobr><span class="code-emphasis inline-block">getting-started</span></nobr> branch, you should see that a few of the `.ts` files are empty. Don't worry. We will be filling them back up with code soon.

Additionally, we will set up a few constants in `src/utils.ts`.

That's pretty much it for a bird's eye view. Files like `asconfig.json` are entry files that inform _AssemblyScript_ the options to use when compiling your code to _WebAssembly_. Some simply tell _AssemblyScript_ where to look for your files. Others may deal with optimizing compilation. More on entry files can be found in [The AssemblyScript Book](https://www.assemblyscript.org/compiler.html#command-line-options).



## Let's Start Coding!


Open your `src/assembly/index.ts` file, and paste the following at the top of the page:

When offering code to the reader to use, make sure to use the `{numberLines:true}` modifier to help orient the reader to where in the file you are referencing.

```typescript{numberLines:true}
   // assembly/index.ts
   import { Context, ContractPromiseBatch, logging, u128, PersistentVector } from "near-sdk-core"
```

Let's review what we are importing from `near-sdk-core`:

- Context: _Provides context for contract execution, including information about transaction sender, etc._

-  ContractPromiseBatch: _Batches ContractPromise, which make asynchronous calls to other contracts and receives callbacks._

-  logging: _Logs a string message._

-  u128: _unsigned 128-bit integer type_ 

Next, let's add some constants and type declarations to `index.ts`:

When offering a large section of code, use this Vuetify component configuration to create a drop down.

<v-row justify="center" class="mb-4">
<v-expansion-panels accordion>
<v-expansion-panel>
<v-expansion-panel-header>index.ts (continued)</v-expansion-panel-header>
<v-expansion-panel-content>

<!--  Notice the {numberLines} attribute has an integer value; that tells it to number the lines starting at 3 -->

```typescript{numberLines:3}
// code.......
//.....that's
//....a lot of lines

```

</v-expansion-panel-content>
</v-expansion-panel>
</v-expansion-panels>
</v-row>

<br/>

`<br/>` tags come in handy when tweaking formatting. Make sure to skip a line after them in order for them to be recognized.



## Calling Functions


Walk through running Bash commands.

```bash
   $ yarn build:release
```

If you see an error, run `$ yarn` to make sure the project's dependencies have been installed locally.

Continue to re-orient your reader through the build process, and try to help them avoid common troubleshooting errors.

<pre class="language-bash">
  $ <span class="token function">near</span> dev-deploy ./build/release/CONTRACT_NAME.wasm
</pre>

Note: if you do not specify the `./build/release/CONTRACT_NAME.wasm` path in the above command, NEAR defaults to checking for `out/main.wasm` 

You should see another newly generated folder called `neardev`. This is a really cool feature of NEAR where you can quickly create and use a _TestNet_ account for your contract.  

Give examples of correct and incorrect Terminal output where applicable.

<pre class="language-text">
  CONTRACT_NAME $ <span class="token function">near</span> dev-deploy ./build/release/CONTRACT_NAME.wasm
  Starting deployment. <span class="code-emphasis">Account id: dev-1622755101091-2932922</span>, 
  node: https://rpc.testnet.near.org, helper: https://helper.testnet.near.org,
  file: ./build/release/CONTRACT_NAME.wasm
  Transaction Id EXRwdkcY8iNE1xyowRvc1xvvYYR4YbXNZTCchSFxryrN
  To see the transaction in the transaction explorer, please open this url in your browser
  https://explorer.testnet.near.org/transactions/EXRwdkcY8iNE1xyowRvc1xvvYYR4YbXNZTCchSFxryrN
  Done deploying to dev-1622755101091-2932922
</pre>

Here's a more specific example:

The account NEAR generated for the contract above is `dev-1622755101091-2932922`. 

<pre class="language-bash">
  Scheduling a call: dev-1622755101091-2932922.say({"message":"Hello"})
  Transaction Id 2ZJcMeNb9rkeJuXojAdWFU9wQFkUhy3EU7DLz4sis292
  To see the transaction in the transaction explorer, 
  please open this url in your browser
  https://explorer.testnet.near.org/transactions/2ZJcMeNb9rkeJuXojAdWFU9wQFkUhy3EU7DLz4sis292
  <span class="token function">true</span> 
</pre>

Take this opportunity to review any concepts that may be difficult for the reader to comprehend about contracts and any dependencies especially if they are coming from `near` e.g. `near-sdk-as` 


<h3 class="mt-10 mb-4">Adding More Methods</h3>



## Refactoring


Not absolutely necessary to have a refactoring section especially if the contract is already following a singleton pattern. So, use as you see fit. However, if you don't intend to have a refactoring section delete the `refactoring/` branches from your contract's repo to avoid confusion.


<h3>Initialize your Contract</h3>


Remind the reader about initialization when using Class pattern for their contract.



## Testing


A bit about the importance of unit testing may be helpful here.

Maybe have some code for them to use with directions on using bash commands to execute tests. Don't forget to have them switch to the appropriate branch.

Mention some common errors the user may see, and have some examples of successful tests. 

You can have simulation testing here, but be sure to explain what is happening in detail since many readers will not be familiar with `Rust`.



## Deployment


Give detailed instructions about what deployment does, and how to find the deployed contract on Near explorer, etc.



## Adding Scripts


This is where the user can run scripts that save them writing lines of code in the CLI.



## Summary


Congratulate the reader! 


- list specifics of tutorial
- so reader can know what they've accomplished
  
<br/>

Take some time be be reassuring as the reader may have had a difficult time. Encourage them to keep going.



## What Next?


<h3 class="mt-10 mb-4">Simulation Testing</h3>


If you want to dive deeper into testing, head over to the [Near Docs](https://docs.near.org/docs/develop/contracts/rust/testing-rust-contracts#simulation-tests), and look into Simulation Tests. Although, we wrote our contract code in _AssemblyScript_, all Simulation Tests are written in _Rust_, which can be a very challenging language to learn, but well worth it if you continue developing contracts. 


<h3 class="mt-10 mb-4">Adding a Front End</h3>


Not all contracts need a front end, but I believe they can help a reader understand contract in terms of a web2 app.

It's usually a form of some sort, and currently lives in the main `near-mezze` repo with plans to fetch it like the this README will be fetched.

<Vuetify-Form-Custom-Component-></Vuetify-Form-Component>









