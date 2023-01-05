&copy; 2022-2023 **Andra-Ioana Stoica** & **Andrei Napruiu** -> **322CA**

Most of the project can be seen in the andra branch because we worked more on her laptop.

[Github](https://github.com/andreinapruiu/Coffee-and-a-good-Book)
# Coffee-and-a-good-Book

## Content
1. [Introduction](#introduction)
2. [About the project](#about-the-project)
3. [How to run it?](#how-to-run-it)
4. [Conclusion](#conclusion)

## Introduction

Each of us chose what to do in the project so for the site design and idea Andra was the one to come up with ideas and implement them, while Andrei was the one who put things together to being possible to navigate between pages.

### ***Motive***
The main reason for doing this project is an assignment for college. Also, we thought that it may be interesting to try and get out of our comfort zone, working with new technologies and to self-impose a deadline for the final version of the website.

### ***About***
Coffee and a good Book is a website that uses your preferences to determine which genre is the best for you and suggests a book based on your answers on different questions. We tried to make it look at good as we could in the time frame we had using Bootstrap and other CSS knowledge we had.

We used Pyhton and JavaScript for the quotes and site interactions, Docker for hosting the site locally and Bootstrap for easier designs.

## About the project
Going deeper inside what we've acomplished, we basically created a website from scratch, trying to implement as many pages as possible. The idea of the project was to have something like a book store, but more like a book club in which a person can come and search for his favorite authors and types of books.

We've done a research and found authors like Coleen Hoover (which you can search with "coleen h", "coleen hoover" or even "hoover coleen"), Matt Haig and Paulo Coelho (which you can search the same as the one above). Also we have 2 genres, fantasy and self help(self growth). Each of these were created following a mock-up designed by Andra. We sugested 5 books for each of the page (just to be easier).

Try searching for "coffee" =)))

As you can see in the first seconds of opening the site, we created a loading screen which has a quote (quote of the day, but it's generated with every run of the dockerfile). Also, we have an array of quotes that are chosen random and put in the header of the main page. In the secondary pages you can go back to the main one by clicking on the coffee.

### **What we want to do more?**
- As you can see, we have a newsletter design, but it's not working. Because we wanted to respect the deadline, we submitted the project as it is, but we want to implement a newsletter that sends emails monthly, recommending books. We will use mailchimp for indexing the emails registered in the newsletter.
- We want to do the search bar to suggest some autocompletion on the spot, maybe with some AI.
- We want to create and use a database for the quotes, books and authors.
- We want to find a way to make the python script run itself.

## How to run it?
> First thing first, be sure you have installed Docker.

Once you unzip all the files in the location you want, you enter the folder and right click inside it, then choos Open in Terminal. Then run this command to open VS Code, or open the project in your type of code editor.

```
code .
```

Here you can either consider looking over the code, or continue with running it. Open a new terminal and be sure to be in the folder containing the Dockerfile. Run the following command:

```
docker build -t cagb .
docker run -dp 80:80 cagb
```

This should run your docker in the 80 port (if you want to use other port, or the 80 port isn't free you can try with either 80:80 or 5500).

All that's left is to go into Docker and open the project from there.

If you want to change the quote from the loading screen, you will need to run the script:

```
python3 tasks.py
```

## Conclusion
We consider time management is the most important thing when doing a project so we think we could do better, but we learned a lot, especially when working with JS and Docker, considering we both were noobies and tried everything from scratch. We consider it a good project that can be improved at any time.

We will try to do some new things on the repo.