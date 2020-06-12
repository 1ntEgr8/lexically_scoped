---
title: Implementing `flatmap` in Rust
date: 2020-06-09
---

goals of this doc:
* learn about traits in Rust
* learn about iterators in Rust

Not too far back in time, I happened to watch @jonhoo's stream on iterators in Rust in which he implemented the standard library function `flatten`. In the stream, he recommends implementing `flatmap` as a way to better understand Rust's amazing system of trait bounds. So here we are!

## What in the world is `flatmap`?

* mention about monadic journey
* talk about its relation to map
* how the standard library defines it

## The goal

* describe the function you are going to implement
* what contracts must it uphold

implementation
* write tests
* start with some boiler plate
* explain the trait bounds
* run tests
* impl for iterator trait
* explain the trait bounds
* run tests
    * fail
    * explain the error
    * run again
    * yay!
* bonus
    * implement next_back()


