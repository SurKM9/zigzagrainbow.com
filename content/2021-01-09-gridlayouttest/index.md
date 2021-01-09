---
title: Add or remove widgets in QGridLayout
tags: [cplusplus, qt]
date: 2021-01-09T19:00:44.226Z
path: blog/add-remove-widgets-qgridlayout
cover: ./grid.jpg
excerpt: Imagine we want to add multiple widgets in QGridLayout dynamically but also remove widgets on the fly.
---

## Introduction

Imagine we want to add multiple widgets in `QGridLayout` dynamically but also remove widgets on the fly. Adding widgets to grid layout is pretty straight forward but removing widgets is the tricky part. In this tutorial we will see how to achieve the same.

## Goal

Our goal would be to design a simple UI with buttons which enable us to achieve adding and removing widgets from a grid layout dynamically. Our application would ultimately look like this:

![window](https://user-images.githubusercontent.com/13438870/104109918-e1cf4880-52d2-11eb-8ebf-6e331b3832b2.gif)

<span>Photo by <a href="https://unsplash.com/@lanceanderson?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Lance Anderson</a> on <a href="https://unsplash.com/s/photos/grid?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
