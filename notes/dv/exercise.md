---
layout: default
title: Exercises - Data Visualization
---

# Exercises

Here are the detailed answers to all the exercises from the provided materials, based on the content within the slides.

---

### **Lecture 1: Introduction to Data Visualization**

**Class Activity: Think-Pair-Share**
*   **Question:** Scientific visualization vs. Information visualization.

*   **Answer:**
    Based on the principles in the lectures, Scientific Visualization and Information Visualization can be distinguished as follows:

| Feature | **Scientific Visualization (SciVis)** | **Information Visualization (InfoVis)** |
| :--- | :--- | :--- |
| **Data Type** | Data is typically physical or spatial in nature, representing phenomena from the real world. Examples: medical scans (MRI, CT), fluid dynamics, molecular structures, geographic terrain models. | Data is often abstract, discrete, and has no inherent spatial representation. Examples: business metrics, financial data, social networks, text collections, survey results. |
| **Representation** | The visualization aims to create a realistic or physically-based representation. A map of a hurricane's path or a 3D model of a molecule seeks to mimic the real thing. | The visualization creates a visual structure for abstract data. A bar chart or a scatter plot does not represent a physical object but provides a framework to understand relationships in the data. |
| **Goal** | To faithfully represent a physical phenomenon for analysis, often to understand its structure, dynamics, or properties. | To gain insight into abstract data by revealing patterns, trends, clusters, and outliers that are not obvious from raw numbers or text. |
| **Examples from Slides** | The anatomical drawings of Leonardo da Vinci (Slide 1-7) are an early form of SciVis. Geographic maps showing physical land use (Slide 1-7) can also be considered SciVis. | Charles Joseph Minard's chart of Napoleon's march (Slide 1-7), business dashboards, word clouds (Slide 1-24), and most standard charts like pie, bar, and line charts (Slide 1-22) are examples of InfoVis. |

---

### **Lecture 2: Design Principles for Visualization**

**Exercise 1: Critique**
*   **Question:** Analyze the unemployment rate chart on slide 2-27 and fill in the table on slide 2-28, indicating which design aesthetics support or hinder understanding.

*   **Answer:**

| Design principle | Support / Hinder | Justification |
| :--- | :--- | :--- |
| **Chart format** | Hinder | The chart is a static image with no interactivity. For a time-series, interactivity like tooltips to see the exact date or value would be helpful. |
| **Colour** | Hinder | The chart is monochromatic, which is good for printing, but the single color scheme doesn't add any value. The large, solid diamond markers are visually heavy and dominate the data line. |
| **Text and labels** | Support | The data points are directly labeled with their percentage values, which makes the specific rates clear without needing to refer constantly to the y-axis. |
| **Readability** | Support | The labels are horizontal and the font is clear and legible. |
| **Scales** | Hinder | The y-axis starts at 3.00%, not zero. This truncation exaggerates the visual difference between the data points, making small fluctuations appear much more significant than they are. The x-axis is not present, leaving the time period ambiguous. |
| **Data integrity** | Hinder | The non-zero baseline is a significant data integrity issue. It violates the principle of proportionality, where the visual effect should match the data effect. A 10% change in unemployment should not look like a 100% change on the graph. |
| **Chartjunk** | Hinder | The heavy gridlines and the oversized diamond markers can be considered chartjunk. They add ink to the page without adding new information and can distract from the data itself. |
| **Data density** | Support | The data density is low (a single time series), which is appropriate for clarity. The chart is not cluttered with too many series. |
| **Data richness** | Hinder | The chart lacks context. There is no title to explain what unemployment rate is being shown (e.g., which country or region). There is no time frame on the x-axis. |
| **Attribution** | Hinder | There is no source cited for the data, which reduces its credibility and makes it impossible to verify. |

---

### **Lecture 3: The Audience**

**EXERCISE 1: Build three charts**
*   **Question:** Using the survey data on software skills, create a vertical bar chart, a radar chart, and a stacked bar chart to show the skill set of the respondents.

*   **Answer:**
    *(Assuming the data `surveydata.csv` contains columns for each software [Excel, Tableau, etc.] and rows for each respondent, with values like 1="No Knowledge", 2="Very Poor", ..., 6="Very Good")*

    1.  **Vertical Bar Chart:**
        *   **Insight:** To show the *average* technical skill level for each software across all respondents.
        *   **Creation:**
            *   For each software column, calculate the mean of the numeric skill ratings (1-6).
            *   Create a vertical bar chart where the x-axis lists the software names (e.g., "Excel", "Tableau").
            *   The y-axis represents the average skill score, ranging from 1 to 6.
            *   Each bar's height corresponds to the calculated average skill for that software.
            *   This chart would make it easy to quickly compare which software the respondents are, on average, most and least skilled with.

    2.  **Radar Chart:**
        *   **Insight:** To visualize the "shape" of a respondent's or a group's skill set across multiple tools.
        *   **Creation:**
            *   Each spoke of the radar chart represents a different software.
            *   The distance from the center indicates the skill level (e.g., 1 at the center, 6 at the edge).
            *   Plot a single line connecting the average skill scores for all software.
            *   **Critique (as per the lecture):** While visually interesting, this chart makes it difficult to compare the performance (skill level) between different software accurately, as the human eye is not good at comparing lengths on different angles. It is also difficult to compare multiple groups (e.g., different user personas) on the same chart without it becoming a confusing mess of lines.

    3.  **Stacked Bar Chart:**
        *   **Insight:** To show the *distribution* of skill levels for each software.
        *   **Creation:**
            *   Create a bar chart where the x-axis lists the software names.
            *   The y-axis represents the percentage of respondents (from 0% to 100%).
            *   Each bar is a "stack" of colored segments. Each segment's height represents the percentage of respondents who selected that skill level (e.g., a blue segment for "Very Good", green for "Good", etc.).
            *   This chart is excellent for seeing the overall composition of skill levels. For example, it could reveal that while the *average* skill in Excel is high, it's because many users are "Very Good" while a significant portion are "Very Poor," whereas Tableau skills might be more evenly distributed in the middle ranges.

**EXERCISE 2: Use pre-attentive attributes**
*   **Question:** Add one pre-attentive attribute to each of the charts created in Exercise 1.

*   **Answer:**
    Based on the pre-attentive attributes of **color, form, and spatial position** (Lecture 3, Slide 14):

    1.  **Vertical Bar Chart (Attribute: Color):**
        *   **Application:** Highlight the bar for the software with the highest average skill in a distinct, contrasting color (e.g., blue) while leaving all other bars a neutral gray.
        *   **Purpose:** This immediately draws the viewer's attention to the key insight—the tool respondents are most proficient with—before they even have to read the labels.

    2.  **Radar Chart (Attribute: Form):**
        *   **Application:** If comparing two groups of respondents (e.g., "Analysts" vs. "Managers"), use a different line form for each. One group could be a solid line, and the other could be a dashed line.
        *   **Purpose:** The difference in form allows the viewer to distinguish between the two groups' skill profiles on the same chart, though the inherent comparison difficulties of a radar chart remain.

    3.  **Stacked Bar Chart (Attribute: Spatial Position):**
        *   **Application:** Reorder the bars on the x-axis. Instead of alphabetical order, arrange them from the software with the highest percentage of "Very Good" ratings to the lowest.
        *   **Purpose:** This use of spatial position creates a clear visual trend, allowing the audience to instantly see a ranked order of software mastery among the respondents without having to inspect each bar individually.

---

### **Lecture 4: Linked Views**

**Thinking Time: Visualization Strategies for Linked Views**
*   **Question:** Fill in the table with descriptions and examples for Replacement, Overlaying, and Repetition.

*   **Answer:**

| Strategy | Description | Example |
| :--- | :--- | :--- |
| **Replacement** | An interaction in one view causes another view to be completely replaced with new content. This is useful for drilling down from a summary to a detailed view. | A user clicks on a country on a world map. A separate panel on the dashboard, which was previously showing global stats, is now replaced with a detailed time-series chart of COVID-19 cases for only the selected country. |
| **Overlaying** | An interaction adds a new layer of information on top of an existing view without replacing it. This is effective for comparison or adding context. | In a scatter plot of player height vs. weight, a user selects a checkbox to "Show Regression Line." A line representing the statistical trend is then drawn *over* the existing scatter plot points. The original data is still visible underneath. (Similar to slide 4-5). |
| **Repetition** | An interaction causes the same type of chart to be repeated for different subsets of data, often arranged in a grid. This is also known as faceting or small multiples. | A user selects "USA" and "Canada" from a country filter. The system generates two identical line charts side-by-side: one showing the unemployment rate over time for the USA, and the other showing the same for Canada. Both charts share the same axes for easy comparison. (See Trellis Displays in Lecture 5). |

---

### **Lecture 5: High-dimensional Data Visualization**

**Class Activity (Group): 'Grand Tour' visualization**
*   **Question:** Search for 'Grand Tour' visualization and share findings (Definition, Method, Tools, Examples).

*   **Answer:**

    *   **Definition:** A Grand Tour is a dynamic visualization technique for exploring high-dimensional data. It works by showing a continuous sequence of 2D linear projections of the data, as if flying a camera through the n-dimensional space. The result is an animation or "movie" that can reveal structures like clusters, outliers, and linear relationships that are not visible in any single static projection.

    *   **Technical Specification/Method:** The core method is to generate a smooth path through the space of all possible 2D projections. This is done by:
        1.  Choosing a starting 2D projection plane.
        2.  Choosing a target 2D projection plane (often randomly).
        3.  Interpolating between the starting plane and the target plane, creating a series of intermediate projection planes.
        4.  Projecting the high-dimensional data points onto each of these intermediate planes and displaying them in sequence as an animation.
        5.  Once the target is reached, a new target is chosen, and the process continues.

    *   **Tools/Software:**
        *   **R:** The `tourr` package is the standard implementation in R. It can be integrated with `ggplot2` to create sophisticated tour animations.
        *   **Python:** Libraries like `tour-py` and integrations within other visualization libraries provide this functionality.
        *   **Standalone Software:** Specialized statistical software like GGobi and Mondrian have implementations of the Grand Tour.

    *   **Examples:** A classic example is using the Grand Tour on the 4-dimensional Fisher's Iris dataset. As the animation runs, the user would see the 2D scatter plot of the data points continuously changing. At certain projection angles, the three iris species (setosa, versicolor, virginica) would appear as a single mixed cloud. At other, more "interesting" angles, the three species would separate into distinct, well-defined clusters, revealing the underlying structure of the data.

---

### **In-Class Exercise 1 (High-dimensional Data Visualization)**

1.  **Question:** How does the arrangement of variables in a mosaic plot influence interpretation, and what is the recommended strategy for analyzing high-dimensional categorical data? Justify.

    *   **Answer:**
        *   **Influence of Arrangement:** The arrangement of variables in a mosaic plot is critical because it defines the visual hierarchy and conditioning. The plot is created by recursively splitting rectangles. The first variable splits the plot vertically. The second splits each of those rectangles horizontally, and so on. This means variables placed earlier in the order act as **conditioning variables**, creating large "panels" within which other relationships are examined. Variables placed last are the primary focus of comparison. Changing the order completely changes the plot and what relationships are easy to interpret.
        *   **Recommended Strategy:**
            1.  **Place the variables of primary interest last.** As seen in the detergent example (Slide 5-8), if the goal is to see how `M-user` influences `Preference`, these two variables should be the last two in the sequence.
            2.  **Place conditioning variables first.** Variables that define the subgroups for comparison (e.g., `Water Softness`, `Temperature`) should be placed first to create the main grid of the plot.
            3.  **Place variables with fewer categories first.** To avoid excessive visual clutter and creating too many tiny, unreadable rectangles, place conditioning variables with fewer levels (e.g., a binary variable) before those with many levels.
        *   **Justification:** This strategy is justified by how humans perceive hierarchical data. By placing conditioning variables first, you establish a clear context for the viewer (e.g., "We are now looking only at the 'hard water, cold temperature' group"). Then, by splitting this context by the variables of interest, you allow for a direct and uncluttered comparison of the key relationship *within* that specific context. This makes complex, conditional interactions much easier to discover and interpret.

2.  **Question:** Propose a visualization strategy for overplotting in parallel coordinate plots (PCPs) with large datasets.

    *   **Answer:**
        A multi-faceted strategy is needed to handle overplotting in PCPs while maintaining interpretability.

        1.  **Primary Technique: Alpha-Blending (Transparency)**
            *   As shown in the slides (5-29, 5-30), the most direct technique is to make each line semi-transparent. Instead of solid black lines that completely obscure each other, transparent lines create a density plot. Areas where many lines cross over will appear darker, while areas with few lines will be lighter. This immediately reveals the main paths and clusters in the data, turning the problem of overplotting into a feature (density visualization).

        2.  **Complementary Preprocessing Technique: Clustering**
            *   Before plotting, run a clustering algorithm (e.g., k-means) on the dataset. Then, you can enhance the PCP in two ways:
                *   **Color by Cluster:** Assign a unique color to each cluster and plot all the lines, colored by their cluster membership. This helps untangle the "hairball" by showing which paths belong together.
                *   **Plot Centroids:** For a less cluttered view, plot only the cluster centroids (the average path for each cluster), perhaps using thicker lines. This shows the main patterns in the data at a high level.

        3.  **Data Reduction Technique: Sampling**
            *   If the dataset is extremely large (e.g., millions of rows), plotting every point is computationally expensive and will still result in a black screen even with alpha-blending. A valid preprocessing step is to take a large, random sample of the data (e.g., 10,000 rows). This representative sample can often reveal the same underlying structure with significantly less clutter.

        **Proposed Strategy:** Start with **alpha-blending** as the default. If the structure is still unclear, apply **clustering** and **color the lines by cluster** to separate the main trends. This combination preserves detail while adding structural insight and is a powerful way to enhance a PCP for large datasets.

---

### **In-Class Exercise 2**

1.  **Question:** Analyze thematic vs. topographic maps for visualizing unemployment rates.

    *   **Answer:**
        *   **Analysis:**
            *   **Topographic Maps:** As shown in Lecture 6 (Part 1), slide 10, these maps are designed to visualize the Earth's surface accurately, showing features like roads, rivers, and land use. Their limitation is that they are dense with information, which makes it difficult to highlight a single socio-economic theme.
            *   **Thematic Maps:** These maps are designed specifically to represent the distribution of a particular theme, such as population density or, in this case, unemployment. They simplify or remove geographic detail to focus the viewer's attention on the pattern of the theme.
        *   **Most Effective Map and Justification:** The most effective map to visualize the distribution of unemployment rates across a country is a **thematic map**, specifically a **choropleth map**.
        *   **Justification:** The primary goal is to see spatial patterns—which regions have high or low unemployment—not to navigate using roads or rivers. A choropleth map achieves this perfectly by using a sequential color scale (e.g., light yellow for low unemployment, dark red for high unemployment) to fill in geographic units (like states or counties). This makes regional clusters and disparities instantly visible. Trying to overlay this data on a topographic map would result in a cluttered, unreadable visualization where the unemployment data would be obscured by irrelevant geographic features.

2.  **Question:** Discuss TWO examples of poorly designed maps where visual variables mislead users.

    *   **Answer:**
        1.  **Poorly Designed Qualitative Map:**
            *   **Example:** Using a sequential color scheme (e.g., tints of black from light gray to solid black) to represent different, unordered categories, such as different types of land use (forest, water, residential). (Based on Lecture 6, Part 1, Slide 21a).
            *   **How it Misleads:** The visual variable of **value** (lightness/darkness) has a natural perceptual order. Viewers will instinctively interpret darker areas as being "more" or "more important" than lighter areas. When used for qualitative (categorical) data where no such order exists, it creates a false visual hierarchy, misleading the user into thinking some categories are more significant than others when they are simply different. The correct approach is to use the visual variable of **hue** (different colors like red, blue, green) with equal brightness to show that the categories are distinct but equal.

        2.  **Poorly Designed Quantitative Map:**
            *   **Example:** Using distinct, unordered hues (e.g., red, blue, yellow, green) to represent quantitative data that has a clear order, such as population figures. (Based on Lecture 6, Part 1, Slide 23b).
            *   **How it Misleads:** The visual variable of **hue** is best for showing categorical differences. It does not have a universally understood perceptual order (is blue "more" than yellow?). When used for quantitative data, the user cannot discern the magnitude or rank of the values. They cannot tell if a red area has a higher or lower population than a blue area. This makes it impossible to see trends, patterns, or relative quantities. The correct approach is to use a **sequential color scheme** (e.g., light green to dark green) where the change in value/lightness directly corresponds to the change in the data's magnitude.

3.  **Question:** Python coding for ASEAN GDP data.

    *   **Answer:**
        *(Assuming a CSV file named `aseanGDP2022.csv` exists with the data from the table.)*

        **i. Interactive scatter plot of population vs. GDP per capita.**

        ```python
        # Import necessary libraries
        import pandas as pd
        import plotly.express as px

        # Assume the data is in a file named 'aseanGDP2022.csv' in the same directory
        try:
            df = pd.read_csv('aseanGDP2022.csv')

            # Create an interactive scatter plot
            fig = px.scatter(
                df,
                x="Population in Million",
                y="GDP Nominal Per Capita USD",
                title="ASEAN Countries: Population vs. GDP Per Capita (2022)",
                labels={
                    "Population in Million": "Population (Millions)",
                    "GDP Nominal Per Capita USD": "GDP Nominal Per Capita (USD)"
                },
                # Add country name to hover data for interactivity
                hover_name="Country",
                # Optional: size the bubbles by another variable, e.g., total GDP
                size="GDP Nominal in Millions of USD",
                size_max=60 # Control the maximum bubble size
            )

            # Improve layout
            fig.update_layout(
                xaxis_title="Population (Millions)",
                yaxis_title="GDP Nominal Per Capita (USD)",
                title_x=0.5 # Center the title
            )

            # Show the plot
            fig.show()

        except FileNotFoundError:
            print("Error: 'aseanGDP2022.csv' not found. Please ensure the file is in the correct directory.")

        ```

        **ii. Bar chart summarizing the combined total GDP by country.**

        ```python
        # Import necessary libraries
        import pandas as pd
        import plotly.express as px

        # Assume the data is in a file named 'aseanGDP2022.csv' in the same directory
        try:
            df = pd.read_csv('aseanGDP2022.csv')

            # Clean up the column names by removing extra spaces or characters if necessary
            # (Assuming the columns from the image are 'GDP Nominal (Agricultural) Millions of Int'l Dollar', etc.)
            # For this code, I will use shorter assumed names for simplicity.
            # Let's assume the columns are named: 'GDP_Agri', 'GDP_Ind', 'GDP_Serv'
            
            # Let's rename the columns based on the image for clarity
            df.rename(columns={
                "GDP Nominal (Agricultural) Millions of Int'l Dollar": "GDP_Agri",
                "GDP Nominal (Industrial) Millions of Int'l Dollar": "GDP_Ind",
                "GDP Nominal (Services) Millions of Int'l Dollar": "GDP_Serv"
            }, inplace=True)
            
            # Calculate the combined total GDP in International Dollars
            df['Total_GDP_Intl'] = df['GDP_Agri'] + df['GDP_Ind'] + df['GDP_Serv']

            # Sort the dataframe by the total GDP for a more effective visualization
            df_sorted = df.sort_values(by='Total_GDP_Intl', ascending=False)

            # Create a bar chart
            fig = px.bar(
                df_sorted,
                x="Country",
                y="Total_GDP_Intl",
                title="Total Combined GDP (Agricultural, Industrial, Services) by ASEAN Country (2022)",
                labels={
                    "Country": "Country",
                    "Total_GDP_Intl": "Total GDP (Millions of Int'l Dollars)"
                },
                # Add hover data to show the breakdown
                hover_data=['GDP_Agri', 'GDP_Ind', 'GDP_Serv']
            )

            # Improve layout
            fig.update_layout(
                xaxis_title="Country",
                yaxis_title="Total GDP (Millions of Int'l Dollars)",
                title_x=0.5 # Center the title
            )

            # Show the plot
            fig.show()

        except FileNotFoundError:
            print("Error: 'aseanGDP2022.csv' not found. Please ensure the file is in the correct directory.")
        except KeyError as e:
            print(f"Error: A column was not found. Please check column names in the CSV. Missing column: {e}")

        ```