---
description: How to push the project to GitHub
---

Here are the steps to push your "Guess The Woof!" project to GitHub:

1.  **Initialize Git**
    Open your terminal in the project folder (`/Users/heliosal/.gemini/antigravity/scratch/guess-the-woof`) and run:
    ```bash
    git init
    ```

2.  **Stage and Commit Files**
    Add all your files to the staging area and create your first commit:
    ```bash
    git add .
    git commit -m "Initial commit: Guess The Woof app"
    ```

3.  **Create a Repository on GitHub**
    - Go to [GitHub.com](https://github.com) and log in.
    - Click the **+** icon in the top right and select **New repository**.
    - Name it `guess-the-woof`.
    - Click **Create repository**.

4.  **Connect to GitHub**
    Copy the commands shown on the GitHub page under "…or create a new repository on the command line". They will look like this (replace `YOUR_USERNAME` with your actual GitHub username):
    ```bash
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/guess-the-woof.git
    git push -u origin main
    ```

5.  **Done!**
    Refresh your GitHub page to see your code.
