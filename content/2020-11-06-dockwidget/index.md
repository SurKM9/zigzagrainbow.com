---
title: QDockWidget tutorial
tags: [ cplusplus, qt ]
date: 2020-11-06T21:02:31.137Z
path: blog/dock-widget
cover: ./dockCard.jpg
excerpt: DockWidget tutorial.  
---

## Introduction

[QDockWidget](https://doc.qt.io/qt-5/qdockwidget.html) provides the concept of dock widgets, also know as tool palettes or utility windows. Dock windows are secondary windows placed in the dock widget area around the central widget in a [QMainWindow](https://doc.qt.io/qt-5/qmainwindow.html).

QDockWidget acts as secondary utility windows which can be dragged, moved and docked using mouse gestures. 

## How to use

QDockWidget must always be used on a QMainWindow. MainWindow allows areas around the central widget to place secondary windows like QDockWidget. 

![](/assets/dockwidget/mainwindow-docks.png)

User can choose to set the dock widget as desired in allowed areas: LeftDockWidgetArea, RightDockWidgetArea, TopDockWidgetArea, BottomDockWidgetArea, AllDockWidgetAreas or NoDockWidgetArea.

## Tutorial

In this example, we will see how to set a widget inside a dock widget and move the dock widget to all allowed areas using mouse.

``` JS
#include "mainwindow.h"
#include "ui_mainwindow.h"

#include <QLabel>

MainWindow::MainWindow(QWidget* parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    ui->dockWidget->setStyleSheet("QDockWidget::title {background : lightgreen;}");
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_pushButton_clicked()
{
    QLabel* label = new QLabel(ui->dockWidget);
    label->setPixmap(QPixmap(":/img/dockImg.jpeg"));

    ui->dockWidget->setWidget(label);
}
```
<br />

In the above code, we set a stylesheet to our dock widget to make it more visible against a white background. Additionally, we have a QPushButton on the QMainWindow.

On start, our mainwindow looks something like this:

![](/assets/dockwidget/mainwindow.png)

QDockWidget comes with a horizontal titlebar by default. Notice the green bar with an undock and a close button. The **Show** button is connect to the slot **on_pushButton_clicked()** which generates a QLabel. QLabel is set inside dock widget using **setWidget(QWidget* widget)**. QLabel also contains a reference image which looks like this:

![](/assets/dockwidget/topArea.png)

Double clicking on the title bar undocks the QDockWidget and can be freely dragged using mouse to a new position around QMainWindow. Here we can see how the QDockWidget is positioned at different allowed positions.

![Floating](/assets/dockwidget/floatingArea.png)

![Bottom Area](/assets/dockwidget/bottomArea.png)

![Left Area](/assets/dockwidget/leftArea.png)

![Right Area](/assets/dockwidget/rightArea.png)


## Conclusion

In this tutorial, we focused only on floating and changing positions of the QDockWidgets. There are a lot of convenient features the QDockWidget class offers. We might cover other aspects of QDockWidgets as well in future posts. If you have any thoughts or comments please use the comments section below to let us know. 

This sample project can be found on my [GitHub](https://github.com/SurKM9/DockWidget) repo.

<span>Photo by <a href="https://unsplash.com/@tjholowaychuk?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Tj Holowaychuk</a> on <a href="https://unsplash.com/s/photos/dock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>