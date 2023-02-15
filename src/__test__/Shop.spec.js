// src/__test__/Shop.spec.js
import { loadFeatures, autoBindSteps } from "jest-cucumber";
import { productListSteps } from "./productList.steps";

const features = loadFeatures("features/Shop*.feature");

autoBindSteps(features, [productListSteps]);
