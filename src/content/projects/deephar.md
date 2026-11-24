---
title: "DeepHAR: Human Activity Recognition with CNN & BiLSTM"
summary: "Benchmarked five classical and deep-learning models on smartphone sensor data. A 1D CNN reached 95.76% test accuracy, the best of all models."
category: Project
period: "Aug – Nov 2024"
tags: [Python, TensorFlow, Keras, scikit-learn, XGBoost]
github: https://github.com/Asta1729/CNN-and-BiLSTM-Models-for-Human-Activity-Recognition
featured: true
order: 1
---

## Overview

DeepHAR compares classical machine learning and deep learning approaches for **Human Activity Recognition** on the
[UCI HAR Dataset](https://archive.ics.uci.edu/dataset/240/human+activity+recognition+using+smartphones): smartphone
accelerometer and gyroscope signals from 30 subjects performing 6 daily activities, sampled at 50 Hz.

## What I did

- Benchmarked **5 classifiers**: Random Forest, SVM, XGBoost, 1D CNN and BiLSTM. Classical models use the 561
  engineered features; deep networks work directly on raw 128-sample time-series windows.
- Built a lightweight **1D CNN** (Conv1D → MaxPooling → Conv1D + Dropout → Dense) trained with Adam and a batch size of 32.
- Generated per-class precision, recall and F1 reports with heatmap confusion matrices.

## Results

| Model         | Test accuracy |
| ------------- | ------------- |
| **1D CNN**    | **95.76%**    |
| SVM           | 95.05%        |
| Random Forest | 94.13%        |
| XGBoost       | 93.25%        |
| BiLSTM        | 83.51%        |
