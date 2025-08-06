---
layout: default
title: TFB3133/TEB3133 Data Visualization - Mock Final Examination
---

### **TFB3133/TEB3133 - DATA VISUALIZATION**

**MOCK FINAL EXAMINATION**

**SEMESTER:** May 2025
**DURATION:** 3 Hours
**TOTAL MARKS:** 100

**INSTRUCTIONS TO CANDIDATES:**

1. This is an open-book examination. You may refer to online and offline resources.
2. Answer **ALL** questions.
3. Justify your answers by integrating theoretical principles and concepts from the course.
4. For coding questions, provide clear comments to explain your logic.

---

### **PART A: FUNDAMENTAL CONCEPTS [30 Marks]**

**Question 1 (15 marks)**

Critically evaluate the role of Tamara Munzer's "Nested Model for Visualization Design and Validation". In your answer:

a) Briefly explain the four layers of the model. (4 marks)

<details>
<summary>Answer for a) Briefly explain the four layers of the model.</summary>

### The Four Layers of Munzer's Nested Model

Tamara Munzer's Nested Model provides a structured framework for the design and validation of visualizations, breaking the process into four distinct, nested layers.

1. **Domain Problem Characterization:** This outermost layer focuses on understanding the real-world problem of the target users. It involves characterizing their tasks, goals, and the specific domain's vocabulary. The key is to understand _what_ the users need to accomplish.
2. **Data/Operation Abstraction:** This layer involves translating the domain-specific problem into a more generic vocabulary of data types and abstract operations. Tasks are redefined in terms of actions like finding trends, identifying outliers, or comparing values. Data is classified by type (e.g., categorical, quantitative, relational).
3. **Encoding/Interaction Technique Design:** At this level, visual representations and interaction methods are chosen. This involves mapping the abstracted data and operations to visual elements (e.g., points, lines, colors, sizes) and interaction techniques (e.g., filtering, brushing, zooming). The goal is to create a visual language that effectively communicates the data.
4. **Algorithm Design:** This innermost layer is concerned with the efficient implementation of the chosen visualization techniques. The focus is on creating algorithms that can handle the data and render the visualization quickly and efficiently, ensuring the tool is usable and responsive.

</details>
<br>

b) For each layer, identify one potential "threat to validity". (4 marks)

<details>
<summary>Answer for b) For each layer, identify one potential "threat to validity".</summary>

### Threats to Validity at Each Layer

Each layer of the nested model has a unique threat that can invalidate the final visualization if not addressed.

1. **Threat at Domain Layer: Solving the Wrong Problem.** A visualization can be beautifully designed and algorithmically perfect but utterly useless if it doesn't address the actual needs and tasks of the target users.
2. **Threat at Abstraction Layer: Using a Bad Data/Operation Abstraction.** This occurs when the translation from the domain problem to abstract tasks and data types is flawed. For example, abstracting a user's need to "compare regional sales" as "finding outliers" would lead to a mismatched and ineffective visualization design.
3. **Threat at Encoding/Interaction Layer: Ineffective Encoding or Interaction Technique.** The chosen visual representation may be poorly suited for the data or task. A classic example is using a pie chart to show precise comparisons between many categories, which is an ineffective encoding as humans are poor at judging angles accurately.
4. **Threat at Algorithm Layer: A Slow or Unresponsive Algorithm.** The visualization tool may be too slow to be useful. If an interaction like filtering a large dataset takes minutes to render, the user's flow of thought is broken, and the tool becomes a bottleneck rather than an aid to discovery.

</details>
<br>

c) Propose a real-world scenario (e.g., analyzing customer churn for a telecommunications company) and describe how you would apply a validation method at **two** different layers of the model to ensure the final visualization is effective. (7 marks)

<details>
<summary>Answer for c) Propose a real-world scenario and describe how you would apply a validation method at two different layers.</summary>

### Scenario: Telecom Customer Churn Analysis

**Scenario:** A major telecommunications company wants to understand why customers are leaving ("churning"). They have a large dataset with customer demographics, plan details, usage data (calls, data), customer service interaction logs, and churn status. Business managers need a visualization to identify key drivers of churn to inform retention strategies.

**Validation at Two Layers:**

1. **Layer: Domain Problem Characterization**

   - **Validation Method: Observe and Interview Target Users.** Before any design begins, I would conduct structured interviews and observational sessions with the business managers and data analysts who will use the visualization.
   - **Application:** The goal is to validate my understanding of their problem. I would ask questions like:
     - "What specific decisions will you make based on this analysis?"
     - "What do you currently believe are the main reasons for churn?"
     - "Walk me through how you currently try to analyze this data."
   - This validation ensures we are solving the _right problem_ (e.g., "identifying actionable churn predictors for marketing campaigns" rather than just "showing churn rates").

2. **Layer: Encoding/Interaction Technique Design**
   - **Validation Method: Informal Usability Study (Lab Study).** After designing a prototype of the visualization dashboard (e.g., a dashboard with a bar chart showing churn by plan type, linked to a scatter plot of tenure vs. monthly charges), I would conduct a usability study.
   - **Application:** I would recruit a few target users (business managers) and give them the prototype. I would then provide them with specific tasks, such as:
     - "Using this dashboard, can you tell me which customer group has the highest churn rate?"
     - "Find a customer who has a high monthly charge but has not churned."
   - By observing them and measuring the time and errors for these tasks, I can validate whether the chosen charts (encodings) and filters (interactions) are effective and intuitive. This helps prevent the threat of an _ineffective encoding_, ensuring the final tool is actually interpretable.

</details>
<br>

**Question 2 (15 marks)**

A data analyst is tasked with visualizing a high-dimensional dataset containing both numerical and categorical data about university student performance (e.g., GPA, study hours, major, year of study, extracurricular activities, home state). The goal is to identify patterns related to academic success.

a) The analyst is considering using either a **Mosaic Plot** or a **Trellis Display**. Compare and contrast these two visualization techniques in the context of this high-dimensional dataset. (8 marks)

<details>
<summary>Answer for a) Compare and contrast Mosaic Plot and Trellis Display for this high-dimensional dataset.</summary>

### Comparison of Mosaic Plot vs. Trellis Display

For the given high-dimensional student performance dataset, both Mosaic Plots and Trellis Displays offer ways to visualize multivariate relationships, but they do so very differently.

**Mosaic Plot:**

- **Purpose:** Primarily designed for visualizing relationships between **categorical variables**.
- **Mechanism:** It uses the area of rectangles to represent the frequency or proportion of observations in each category combination. Variables are nested sequentially, splitting the axes.
- **Application to Scenario:** It could effectively show the relationship between `Major`, `Year of Study`, and `Home State` (all categorical). However, including numerical data like `GPA` or `Study Hours` would require binning them into categories (e.g., 'Low GPA', 'High GPA'), which involves losing some granularity.
- **Limitation:** As more variables are added, the plot becomes a complex mosaic of many small, hard-to-compare rectangles, quickly becoming cluttered and difficult to interpret (a symptom of the "curse of dimensionality").

**Trellis Display (Small Multiples):**

- **Purpose:** Designed to visualize relationships between a few variables, conditioned across the levels of other (usually categorical) variables.
- **Mechanism:** It creates a grid of smaller, identical charts. Each chart in the grid shows the same relationship (e.g., a scatter plot of `GPA` vs. `Study Hours`) but for a different subset of the data (e.g., one chart for each `Major`).
- **Application to Scenario:** This is highly effective. We could create a grid of scatter plots showing `GPA` vs. `Study Hours`, with separate plots for each `Major` and `Year of Study`. This breaks a complex 6-dimensional problem into a series of easily digestible 2D plots.
- **Strength:** The use of a common scale across all plots allows for easy and accurate comparison between the different subgroups.

**Contrast Summary:**

| Feature               | Mosaic Plot                                               | Trellis Display                                       |
| :-------------------- | :-------------------------------------------------------- | :---------------------------------------------------- |
| **Primary Data Type** | Categorical                                               | Mixed (Numerical & Categorical)                       |
| **Visual Encoding**   | Area represents counts/proportions                        | Any plot type (e.g., scatter, bar) repeated in a grid |
| **Key Strength**      | Showing part-to-whole relationships in contingency tables | Comparing relationships across many subgroups         |
| **Main Weakness**     | Becomes very cluttered with >3-4 variables                | Can take up significant screen space                  |

</details>
<br>

b) Which of the two techniques would you recommend for an initial _exploratory_ analysis, and why? Justify your choice by referencing concepts like "interactivity" and the "curse of dimensionality". (7 marks)

<details>
<summary>Answer for b) Which technique would you recommend for initial exploratory analysis, and why?</summary>

### Recommendation for Exploratory Analysis: Trellis Display

For the initial _exploratory_ analysis of the student performance dataset, I would strongly recommend the **Trellis Display**.

**Justification:**

1. **Manages Complexity and the Curse of Dimensionality:** High-dimensional data is inherently difficult to visualize at once. A Trellis Display masterfully handles this by not attempting to show all variables in a single, complex chart. Instead, it breaks the problem down. By conditioning on categorical variables (`Major`, `Year of Study`), it allows the analyst to focus on a core relationship (e.g., `GPA` vs. `Study Hours`) within each subgroup. This approach of "faceting" the data makes complex patterns more apparent and avoids the overwhelming clutter that a single, multi-variable Mosaic Plot would produce.

2. **Supports Mixed Data Types Natively:** The dataset contains a mix of numerical (`GPA`, `Study Hours`) and categorical (`Major`, `Home State`) data. A Trellis Display is perfectly suited for this, as it can use the numerical data for the axes of the individual plots and the categorical data for the grid structure. A Mosaic Plot would force the unnecessary and lossy conversion of numerical data into categories.

3. **Enhanced by Interactivity for Exploration:** The true power of a Trellis Display in an exploratory setting comes from **interactivity**, particularly **linked highlighting**. As demonstrated in Lecture 5, an analyst could select a group of high-performing students in one scatter plot (e.g., 'Seniors in Engineering') and see their corresponding characteristics highlighted in other linked views (e.g., a bar chart of extracurricular activities). This dynamic "brushing and linking" is the essence of modern visual data exploration and is far more powerful for generating hypotheses than the static view of a Mosaic Plot.

In summary, the Trellis Display provides a clearer, more scalable, and more powerful interactive framework for exploring the relationships in this high-dimensional, mixed-type dataset, making it the superior choice for initial exploration.

</details>
<br>

---

### **PART B: SCENARIO-BASED APPLICATION [30 Marks]**

**Question 3 (30 marks)**

**Scenario:** You are a data visualization consultant hired by the Ministry of Health. They need to create a public-facing, single-page A4 pamphlet to communicate the effectiveness and safety of a new vaccine. The data includes the number of vaccinated individuals, infection rates post-vaccination, and reported side effects categorized by severity (mild, moderate, severe).

**Target Audience:** The primary audience is senior citizens (age 65+), many of whom have limited technical literacy and may have vision impairments.

a) Propose and sketch **one** primary data visualization for this pamphlet. Identify and justify your selection of **three core design principles** (e.g., Color, Hierarchy, Data-Ink Ratio) that you would apply to make the visualization clear, trustworthy, and effective for this specific audience. (12 marks)

<details>
<summary>Answer for a) Propose and sketch one primary data visualization and justify three core design principles.</summary>

### Proposed Visualization and Design Principles

**Proposed Visualization:** A simple, clean set of three horizontal bar charts on the A4 pamphlet. Horizontal bars are used because the category labels ("Mild," "Moderate," "Severe") can be written clearly without rotation.

**Sketch:**

```
+-------------------------------------------------------------+
|               NEW VACCINE: Safe and Effective               |
|                                                             |
|   9.5 Million People Vaccinated!                            |
|                                                             |
|   Infection Rate After Vaccination is Only 0.05%            |
|                                                             |
|   Reported Side Effects (per 1,000 people)                  |
|                                                             |
|   Mild (e.g., sore arm)                                     |
|   [====================] 20                                 |
|                                                             |
|   Moderate (e.g., fever)                                    |
|   [===] 3                                                   |
|                                                             |
|   Severe (requires medical attention)                       |
|   [=] 1                                                     |
|                                                             |
|   Source: Ministry of Health, May 2025. Be safe, get vaxxed!|
+-------------------------------------------------------------+
```

**Justification of Three Core Design Principles:**

1.  **Hierarchy:** The most critical information is made most prominent to guide the audience's attention. The title is large and clear. The key takeaway, "9.5 Million People Vaccinated!", is presented as a large, bold number right at the top, immediately establishing confidence. The bar chart for "Severe" side effects is intentionally placed last and shows the smallest bar, visually reinforcing its rarity. This deliberate structure ensures the key messages are received in the intended order of importance.

2.  **Color:** I would use a very limited and high-contrast color palette. The background would be white. The text would be a dark, legible gray or black. The bars in the chart would use a single, calming, and accessible color, such as a medium blue. I would specifically **avoid** using alarming colors like red (even for "Severe") to prevent unnecessary anxiety. This minimalist and high-contrast approach is crucial for readability, especially for an audience that may have color vision deficiencies or other vision impairments. The goal is to inform, not to alarm.

3.  **Data-Ink Ratio / Chartjunk Removal:** To maximize clarity and reduce cognitive load, I would apply Tufte's principle of maximizing the data-ink ratio. The sketch reflects this by:
    - **Removing all chartjunk:** There are no 3D effects, shadows, or unnecessary background images.
    - **Eliminating the y-axis and gridlines:** The value for each bar is labeled directly next to it. This removes clutter and makes the chart easier to read for those unfamiliar with interpreting axes, allowing them to get the information directly.

</details>
<br>

b) Discuss why a complex, interactive visualization (like a dynamic dashboard with filters and drill-downs) would be inappropriate for this specific medium (A4 pamphlet) and audience. Contrast this with why a simple **line chart** showing "Infections over Time" might be more effective than a **pie chart** showing "Percentage of Side Effect Severity". (8 marks)

<details>
<summary>Answer for b) Discuss why an interactive visualization is inappropriate and compare line vs. pie charts.</summary>

### Inappropriateness of Interactive and Comparison of Chart Types

**Why Interactive is Inappropriate:**

An interactive visualization is fundamentally unsuitable for this scenario for two primary reasons:

1.  **Medium:** The deliverable is a **printed A4 pamphlet**. Print is a static medium; it is physically impossible to embed interactive elements like filters, sliders, or tooltips. The visualization must stand alone and be fully comprehensible without user input.
2.  **Audience:** The target audience is **senior citizens with limited technical literacy**. Even if this were a digital kiosk, a complex, interactive dashboard would likely cause confusion and frustration. Requiring users to "drill-down" or "filter" creates a barrier to information access. For this audience, clarity and directness are paramount. A simple, declarative visualization that presents the key facts without requiring interaction is far more effective and accessible.

**Line Chart vs. Pie Chart Comparison:**

Let's consider showing "Side Effects by Severity" (Mild, Moderate, Severe).

- **Pie Chart (Poor Choice):** A pie chart shows parts of a whole. While one could show the percentage of each side effect category, it is a poor choice for comparison. Humans are not good at accurately comparing the areas or angles of pie slices, especially when the values are close. For example, it would be hard to tell if a slice representing 3% is definitively smaller than one representing 5% without labels. This introduces cognitive strain.

- **Line Chart (Also a Poor Choice for this Data):** A line chart is used to show a trend over a **continuous variable**, typically time. The side effect categories ('Mild', 'Moderate', 'Severe') are discrete, categorical data, not points along a continuous scale. Using a line chart would incorrectly imply a sequential relationship or trend between the severity levels, which is misleading.

**Conclusion:** For comparing the discrete categories of side effect severity, a **simple bar chart** (as sketched in part a) is the most effective choice. It allows for easy and accurate comparison of the different categories by mapping the values to length, a pre-attentive attribute that the human brain processes effortlessly.

</details>
<br>

c) Describe how you would evaluate the effectiveness of your proposed visualization _before_ mass distribution. Suggest **two** specific evaluation criteria and one method (e.g., user testing, survey) to test them with the target audience. (10 marks)

<details>
<summary>Answer for c) Describe how you would evaluate the effectiveness of the visualization.</summary>

### Evaluation of the Proposed Visualization

To evaluate the effectiveness of the vaccine pamphlet's visualization _before_ mass distribution, I would use a user-centered approach focused on the target audience.

**Evaluation Method: One-on-One User Testing with Think-Aloud Protocol**

I would recruit a small group (5-7 participants) of senior citizens who represent the target audience. In a one-on-one session, I would present them with the draft pamphlet and ask them to "think aloud" as they look at it.

**Two Specific Evaluation Criteria:**

1.  **Criterion: Comprehension/Clarity**

    - **Objective:** To determine if the audience can correctly interpret the main message of the visualization.
    - **Testing:** After they have looked at the pamphlet, I would ask open-ended questions like:
      - "What is the most important piece of information this chart is telling you?"
      - "According to this graphic, are severe side effects common or rare? How do you know?"
    - A successful evaluation would see users consistently identifying that the vaccine is widely used and that severe side effects are very rare.

2.  **Criterion: Trustworthiness**
    - **Objective:** To gauge if the visualization feels credible and avoids causing undue alarm.
    - **Testing:** I would ask perception-based questions such as:
      - "How does this information make you feel about the vaccine?"
      - "Is there anything in this presentation that you find confusing or untrustworthy?"
    - A successful evaluation would indicate that users feel informed and reassured, not scared or misled. If they express confusion about the numbers or feel the presentation is trying to "hide something," then the design has failed on this criterion and must be revised.

This qualitative feedback is invaluable for refining the design to ensure it meets the communication goals for this critical public health message.

</details>
<br>

---

### **PART C: PRACTICAL IMPLEMENTATION [40 Marks]**

**Question 4 (40 marks)**

**Scenario:** You are given a dataset in a file named `my_power_grid.csv` containing information about the operational status of renewable energy sources across different states in Malaysia. Your task is to build an interactive dashboard using **Python with Streamlit and Altair**.

The dataset has the following columns:

- `State`: (String) The Malaysian state (e.g., 'Perak', 'Selangor', 'Johor').
- `EnergySource`: (String) The type of renewable energy (e.g., 'Solar', 'Hydro', 'Biomass').
- `Capacity_MW`: (Integer) The maximum power capacity in megawatts.
- `Output_MW`: (Integer) The current power output in megawatts.
- `Efficiency`: (Float) Calculated as (Output_MW / Capacity_MW).
- `Status`: (String) The operational status ('Online', 'Offline', 'Maintenance').

**Instructions:**
Write a Python script (`dashboard.py`) to perform the following tasks. Add comments in your code to explain key steps.

**i. Data Loading and Preparation (10 marks)**

- Load the `my_power_grid.csv` dataset into a Pandas DataFrame.
- Perform a basic data cleaning step: check for and handle any rows where `Capacity_MW` is zero to avoid division-by-zero errors when calculating efficiency. You can either remove these rows or set their `Efficiency` to 0.
- Display the cleaned DataFrame in your Streamlit app under a header "Raw Data View".

**ii. Interactive Linked-View Dashboard (20 marks)**

- Create an interactive dashboard with two linked visualizations:
  1. **A Bar Chart:** This chart should display the **total `Capacity_MW` for each `EnergySource`**.
  2. **A Scatter Plot:** This chart should plot `Capacity_MW` (x-axis) versus `Output_MW` (y-axis). The points should be colored by `EnergySource`.
- Implement a **linked view** (e.g., using `alt.selection_single` or `alt.selection_interval`) so that when a user clicks or brushes over a bar in the bar chart (e.g., 'Solar'), only the data points corresponding to that energy source are highlighted or shown in the scatter plot.

**iii. Summarize Insights (10 marks)**

- Below the dashboard, add a text section in your Streamlit app using `st.write()` or `st.markdown()`.
- In this section, write a brief summary (2-3 sentences) of **one key insight** a user could derive from interacting with your linked-view dashboard. For example, "By selecting the 'Solar' bar, the scatter plot reveals that most solar installations have a high efficiency, as their current output is close to their maximum capacity."

<details>
<summary>Answer for i), ii), and iii). See the full Python code and explanation inside.</summary>

### Python Script: `dashboard.py`

Here is the complete Python script for the interactive dashboard using Streamlit and Altair.

```python
import streamlit as st
import pandas as pd
import altair as alt
import numpy as np

# --- i. Data Loading and Preparation (10 marks) ---

@st.cache_data # Use Streamlit's caching to load data only once
def load_data():
    """
    Loads data from a CSV, creates it if not found, and performs basic cleaning.
    """
    try:
        # Try to load the existing file
        df = pd.read_csv('my_power_grid.csv')
    except FileNotFoundError:
        # If file doesn't exist, create sample data for demonstration
        st.warning("my_power_grid.csv not found. Creating sample data.")
        data = {
            'State': np.random.choice(['Perak', 'Selangor', 'Johor', 'Sarawak', 'Sabah'], size=100),
            'EnergySource': np.random.choice(['Solar', 'Hydro', 'Biomass'], size=100),
            'Capacity_MW': np.random.randint(10, 500, size=100),
            'Output_MW': np.random.randint(5, 480, size=100),
            'Status': np.random.choice(['Online', 'Offline', 'Maintenance'], size=100),
        }
        # Intentionally add a row with zero capacity for cleaning demonstration
        data['Capacity_MW'][0] = 0
        df = pd.DataFrame(data)
        df.to_csv('my_power_grid.csv', index=False)

    # --- Data Cleaning Step ---
    # Handle rows where Capacity_MW is 0 to avoid division by zero errors.
    # Here, we remove them. Another option would be to set Efficiency to 0.
    df_cleaned = df[df['Capacity_MW'] > 0].copy()

    # Calculate Efficiency on the cleaned dataframe
    df_cleaned['Efficiency'] = df_cleaned['Output_MW'] / df_cleaned['Capacity_MW']

    # Ensure Output_MW is not greater than Capacity_MW, which is a common data error
    df_cleaned['Output_MW'] = df_cleaned[['Output_MW', 'Capacity_MW']].min(axis=1)

    return df_cleaned

# Load the data
df = load_data()

# Main App Title
st.title("Malaysia Renewable Energy Grid Dashboard")

# Display the raw data in an expandable section
with st.expander("Raw Data View"):
    st.dataframe(df)

# --- ii. Interactive Linked-View Dashboard (20 marks) ---

st.header("Interactive Analysis of Energy Sources")

# Create a selection object for linking. `on='mouseover'` provides a smooth experience.
selection = alt.selection_single(fields=['EnergySource'], on='mouseover', clear='mouseout')

# --- Chart 1: Bar Chart of Total Capacity by Energy Source ---
bar_chart = alt.Chart(df).mark_bar().encode(
    x=alt.X('EnergySource', title='Energy Source'),
    y=alt.Y('sum(Capacity_MW)', title='Total Capacity (MW)'),
    color=alt.condition(selection, 'EnergySource', alt.value('lightgray'), legend=None),
    tooltip=['EnergySource', 'sum(Capacity_MW)']
).properties(
    title='Total Power Capacity by Source'
).add_selection(
    selection
)

# --- Chart 2: Scatter Plot of Capacity vs. Output ---
scatter_plot = alt.Chart(df).mark_circle(size=100, opacity=0.7).encode(
    x=alt.X('Capacity_MW', title='Max Capacity (MW)', scale=alt.Scale(zero=False)),
    y=alt.Y('Output_MW', title='Current Output (MW)', scale=alt.Scale(zero=False)),
    color=alt.Color('EnergySource', legend=alt.Legend(title="Energy Source")),
    tooltip=['State', 'EnergySource', 'Capacity_MW', 'Output_MW', 'Efficiency']
).transform_filter(
    selection # This line links the scatter plot to the bar chart's selection
).properties(
    title='Capacity vs. Output for Selected Source'
)

# Combine the charts and display them in Streamlit
# Using the '|' operator places them side-by-side
linked_dashboard = bar_chart | scatter_plot

st.altair_chart(linked_dashboard, use_container_width=True)


# --- iii. Summarize Insights (10 marks) ---

st.header("Key Insights from the Dashboard")

st.markdown("""
By interacting with this dashboard, users can derive valuable insights. For example:

*   **Comparing Source Contributions:** The bar chart provides an immediate overview of which energy source contributes the most to the total grid capacity. Hovering over 'Hydro' might show it has the highest total capacity.
*   **Analyzing Performance:** When 'Hydro' is selected, the scatter plot is filtered to show only hydroelectric plants. A user might observe that while hydro plants have high capacity, their output (y-axis) is often significantly lower, suggesting that many are not operating at full power, perhaps due to water levels or demand management.
*   **Identifying Outliers:** By selecting 'Solar', the scatter plot might reveal a cluster of points forming a tight line near the top-right, indicating high efficiency, but also a few outlier points with low output, which could represent solar farms under maintenance or in areas with poor weather.
""")

```

</details>
<br>

---

**- END OF PAPER -**
