---
layout: default
title: Pandas Data Handling - Data Visualization
---

# Pandas Data Handling Cheatsheet

This guide covers the fundamental Pandas operations for loading, inspecting, cleaning, and manipulating data, which are essential steps before creating visualizations.

## Creating and Loading Data

The first step in any data project is to get your data into a Pandas DataFrame.

- **Core Concepts**:

  - **DataFrame**: A 2-dimensional labeled data structure, like a spreadsheet or SQL table.
  - **Creating from a Dictionary**: Useful for small, hard-coded datasets.
  - **Loading from a CSV file**: The most common way to import data.

- **Code Examples**:

  - **Create a DataFrame from a Dictionary**:

    ```python
    import pandas as pd

    # Data is defined in a dictionary
    data = {'Category': ['A', 'B', 'C'], 'Values': [10, 30, 20]}
    df = pd.DataFrame(data)

    # df now holds your data table
    ```

  - **Load Data from a CSV File**:

    ```python
    import pandas as pd

    # Assumes 'my_data.csv' is in the same directory
    df = pd.read_csv('my_data.csv')
    ```

## Inspecting Your Data

Before visualizing, you must understand your data's structure and content.

- **Core Concepts**:

  - Quickly check the first few rows, data types, and summary statistics.

- **Code Examples**:

  - **View First 5 Rows**:

    ```python
    # See the first few entries to understand the columns and data format
    print(df.head())
    ```

  - **Get a Concise Summary**:

    ```python
    # Check data types and look for missing values
    print(df.info())
    ```

  - **Get Descriptive Statistics**:

    ```python
    # Get a statistical summary for numerical columns (count, mean, std, etc.)
    print(df.describe())
    ```

  - **Check the DataFrame's Dimensions**:

    ```python
    # Returns a tuple of (number of rows, number of columns)
    print(df.shape)
    ```

## Selecting and Filtering Data

Often, you'll want to visualize only a subset of your data.

- **Core Concepts**:

  - **Selecting Columns**: Choose one or more columns to work with.
  - **Filtering Rows**: Select rows that meet specific criteria (Boolean indexing).

- **Code Examples**:

  - **Select a Single Column**:

    ```python
    # Selects the 'Category' column
    categories = df['Category']
    ```

  - **Select Multiple Columns**:

    ```python
    # Selects both 'Category' and 'Values' columns
    subset = df[['Category', 'Values']]
    ```

  - **Filter Rows Based on a Condition**:

    ```python
    # Select rows where 'Values' are greater than 15
    high_values_df = df[df['Values'] > 15]
    ```

  - **Filter with Multiple Conditions**:

    ```python
    # Select rows where Category is 'A' AND Values are greater than 5
    filtered_df = df[(df['Category'] == 'A') & (df['Values'] > 5)]
    ```

  - **Filter Using `.isin()` for Multiple Categories**:

    ```python
    # Select rows where Category is either 'A' or 'C'
    filtered_df = df[df['Category'].isin(['A', 'C'])]
    ```

## Basic Data Cleaning

Real-world data is often messy. Cleaning it is a critical preprocessing step.

- **Core Concepts**:

  - **Missing Data**: Identify and decide how to handle missing values (NaNs).

- **Code Examples**:

  - **Drop Rows with Missing Values**:

    ```python
    # Removes any row that contains at least one missing value
    df_cleaned = df.dropna()
    ```

  - **Fill Missing Values**:

    ```python
    # Replaces all missing values in the DataFrame with 0
    df_filled = df.fillna(0)
    ```

  - **Remove Duplicate Rows**:

    ```python
    # Removes rows that are exact duplicates of other rows
    df_no_duplicates = df.drop_duplicates()
    ```

## Data Manipulation and Aggregation

Summarize and reshape your data to prepare it for summary visualizations like bar charts.

- **Core Concepts**:

  - **Group By**: Group data based on categories.
  - **Aggregation**: Calculate a summary statistic (like sum, mean, or count) for each group.
  - **Adding Columns**: Create new columns based on calculations from existing data.

- **Code Examples**:

  - **Group and Aggregate**:

    ```python
    # Calculate the total sum of 'Sales' for each 'Product' category
    # This is a common pattern for creating bar charts
    sales_by_product = df.groupby('Product')['Sales'].sum()

    # To get the count of items in each category
    count_by_category = df.groupby('Category').size()
    ```

  - **Adding a New Column**:

    ```python
    # Create a 'Revenue' column by multiplying 'Price' and 'Quantity'
    df['Revenue'] = df['Price'] * df['Quantity']
    ```

  - **Sorting Values**:

    ```python
    # Sort the DataFrame by the 'Values' column in descending order
    df_sorted = df.sort_values(by='Values', ascending=False)
    ```
