
---
title: TypeScript. Intro.
author: Mateusz Curylo
...

# TypeScript 101

What?

Language written in 'node', transpilled to JavaScript, made by Microsoft.

Profits:

- Static structural typing.

- JavaScript next.

- Tools.

---

# Plan

- Hacking TypeScript in the console 

- Fast introduction to haskell 

- Funcitonal Programming vs Pure Functional Programming 

- Introduction to Fantasy Land specification for JS

- Writing yourself some monads

- Function composition and currying 

- Writing immutable data structures

---


# Hacking Node

- npm install typescript - g

- echo "console.log('Moo')" > moo.ts

- tsc mmo.ts && node moo.js


---

# Congratulations

## You wrote yourself some cow

---

# Classes

- write a class

- compile a class

- look at compiled class

- private, public, static, constructor

---

# PART 2

- we are getting serious!

- https://github.com/fantasyland/fantasy-land

- https://github.com/mhcurylo/ts-fp-training

---

# TypeScript Configuration

- tsc -c tsconfig.json

- noImplicitAny: true

- strictNullChecks: true

---

# Interfaces for algebric data structures

- look at the algebraic interface 

- creating own interface for Maybe

- typing functions - interface, function, fat arrow function

---

# Lets write the maybe monad!

- Just

- Nothing

---

# Lets write some Pure IO monad

- IO<T> implemets Monad<T> 

- The trick: () => val! (Unit);

- should be lazy and have .unsafePerformIO which makes stuff flash!

---

# Can you compose a Hello World?

- Read in the IO!

- Process!

- Log in the IO!


---

# Currying and composition

- Getting rid of lambdas

- Point free style

---

# The END ## Thanks

- It was a pleasure!

---

