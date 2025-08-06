---
layout: default
title: September 2024
---

**UNIVERSITI TEKNOLOGI PETRONAS**

**FINAL EXAMINATION**
**SEPTEMBER 2024 SEMESTER**

**COURSE**: TEB3133/TFB3133 - DATA VISUALIZATION
**DATE**: 4 DECEMBER 2024 (WEDNESDAY)
**TIME**: 9:00 AM - 12:00 NOON (3 HOURS)

---

### **1. You are tasked with creating a chart to present data on the publication trends of journal papers over the past 10 years for three different research fields. The chart will be used in various formats: printed in a journal, displayed on a website, and shown in a slide presentation during a conference.**

**a. Explain the considerations you would take into account for chart format when designing this chart for each of the following formats:**

- **Paper publication** [2 marks]

  - **Resolution:** The chart must have a high resolution, ideally 300 dots per inch (dpi), to ensure clarity and sharpness when printed.
  - **Color & Grayscale:** The design must be effective in both color and grayscale, as journals are often printed in black and white. I would use different patterns or shades of gray in addition to color to distinguish the three research fields.
  - **File Type:** I would save the chart in a high-quality, print-friendly format like TIFF, EPS, or PDF.

- **Web-based display** [2 marks]

  - **Resolution:** A resolution of 150 pixels per inch (ppi) is generally sufficient for web displays. The file size should be optimized for fast loading times.
  - **Interactivity:** The web format allows for interactivity. I could implement tooltips that appear on mouse-over, showing the exact number of publications for a specific year and field. A user could also be given options to filter or highlight a specific research field.
  - **Responsiveness:** The chart should be designed to be responsive, meaning it adjusts its size and layout gracefully for different screen sizes (desktop, tablet, mobile).

- **Projected slide presentation** [2 marks]
  - **Readability:** The chart must be easily readable from a distance on a large screen. This means using large, clear fonts and a high-contrast color scheme.
  - **Simplicity:** The slide should contain minimal clutter. I would remove non-essential elements like gridlines and focus on the key trend or message. The title and key takeaways should be prominent.
  - **Animation:** I could use simple animation to build the chart incrementally, for example, by revealing the trend for each research field one by one. This helps guide the audience's attention and tell a story. The file format would likely be PNG-24 for high quality, embedded within the presentation software.

**b. Discuss with an example if you use:**

- **Inappropriate colour** [2 marks]
  An example of inappropriate color use would be choosing three shades of blue that are very similar (e.g., #ADD8E6, #87CEEB, #B0E0E6). Another poor choice would be using culturally sensitive or thematically inappropriate colors, such as using red, yellow, and green, which might imply a "stoplight" meaning (bad, neutral, good) that doesn't exist in the publication data.

- **What its potential impact on the audience.** [2 marks]
  Using colors with low contrast would make it very difficult for the audience, especially those with color vision deficiencies, to distinguish between the lines representing the three research fields. This would render the chart unreadable and defeat its purpose. Using thematically suggestive colors (like red/green) could mislead the audience into making incorrect judgments, such as assuming the "red" research field is performing poorly when that is not the intended message.

**c. Discuss how you would implement text and labels in your chart to guide readers.**
[NOTE: Consider font face, size, positioning, and the inclusion of descriptive elements that help the audience understand the chart's key insights] [5 marks]

To effectively guide readers, I would implement text and labels with the following considerations:

1. **Descriptive Title and Subtitle:** The chart would have a clear, concise title like "Publication Growth in Key Research Fields (2014-2024)". A subtitle could add context, such as "Computer Science shows the most rapid growth, surpassing Physics in 2020."
2. **Clear Axis Labels:** The x-axis would be clearly labeled "Year" and the y-axis "Number of Publications." I would use natural increments for the y-axis scale (e.g., 0, 500, 1000) and avoid cluttering it with excessive tick marks.
3. **Direct Labeling:** Instead of a separate legend, I would directly label the lines for the three research fields (e.g., "Computer Science," "Physics," "Biology"). The labels would be placed near the end of their respective lines and match their color, making it easier for the reader to connect the label to the data.
4. **Font Choice and Size:** I would use a clean, sans-serif font like Arial or Helvetica for maximum readability. The title would have the largest font size, followed by axis labels, and then data labels. All text would be horizontal to avoid the poor readability of angled or vertical text.
5. **Annotations for Key Insights:** To communicate the key insight, I would add a short annotation directly on the chart. For instance, I might draw an arrow to the point where the "Computer Science" line crosses the "Physics" line and add a text box saying, "CS overtakes Physics in publication volume in 2020."

**d. Given that the chart will be presented to an audience unfamiliar with the data, explain how would you ensure data integrity in your visualization.**
[NOTE: Your answer must refer to the concept of the "lie factor"] [5 marks]

Ensuring data integrity is crucial, especially for an unfamiliar audience who will trust the visualization to be an accurate representation of the facts. The primary way to achieve this is by keeping the "lie factor" equal to 1. The lie factor, as defined by Edward Tufte, is the ratio of the size of the effect shown in the graphic to the size of the effect in the data.

To maintain a lie factor of 1 for the publication trend chart, I would adhere to these principles:

- **Zero-Baseline Y-Axis:** Since this is a line chart representing quantities (number of papers), I will start the y-axis at 0. Truncating the y-axis (e.g., starting at the lowest data value) would dramatically exaggerate the changes and fluctuations over time, creating a high lie factor and misleading the audience about the magnitude of growth.
- **Proportional Representation:** The visual change in the line's height must be directly proportional to the numerical change in the data. If publications in a field grew by 20% from 500 to 600, the corresponding vertical distance on the chart for that growth must be exactly one-fifth of the distance from the zero baseline to the 500-mark.
- **No 3D Effects:** I would avoid any fake 3D effects or other "chartjunk." Adding depth to lines or using 3D bar charts instead of lines can distort perception of the values, making it impossible for the audience to accurately compare the heights and thus breaking the principle of proportional representation. The visualization must be a flat, 2D representation to maintain integrity.

By following these rules, I ensure that the story the chart tells is the same story the data tells, without distortion or sensationalism.

---

### **2. You are presenting data on the global sales trends of electric vehicles (EVs) over the past decade. Your audience consists of business executives and policymakers, most of whom have limited knowledge of the technical details but are keen on understanding market trends.**

**a. Provide TWO (2) specific strategies you would use in your chart design to ensure the audience retains key insights.** [6 marks]

1. **Design for Easy Perception using Pre-attentive Attributes:** To ensure the key message is instantly perceived and processed into sensory memory, I would use pre-attentive attributes. For a line chart showing EV sales, I would make the entire chart a neutral gray color, but use a single, contrasting, and vibrant color (e.g., bright green) to highlight the most recent three years where sales experienced exponential growth. This immediately draws the audience's eyes to the most important part of the trend without them needing to consciously analyze the entire chart.

2. **Reinforce the Message with Clear Text:** Retention is improved when visual and textual information reinforce each other. I would use a strong, declarative title that states the main conclusion, such as "Global EV Sales Have More Than Tripled in the Past Three Years." Additionally, I would add a concise annotation (a short sentence or two) directly on the chart near the highlighted growth period, explaining its significance: "This surge is driven by policy changes and increased consumer adoption, presenting a key market opportunity." This ensures the 'what' (the visual trend) and the 'why' (the explanation) are processed together, leading to better retention.

**b. Describe TWO (2) keys takeaway from your EV sales data to ensure the audience focuses on it.** [6 marks]

1. **The Tipping Point of Exponential Growth:** The first key takeaway would be to emphasize the recent, dramatic acceleration in EV sales. I would frame it as: "While EV sales grew steadily for years, the market hit a critical inflection point in 2021, shifting from linear to exponential growth. This indicates that EVs are no longer a niche market but are now in a phase of mass adoption." This takeaway is critical for executives (for market strategy) and policymakers (for infrastructure planning).

2. **The Dominance of a Single Market:** The second key takeaway would be to highlight the geographical concentration of sales. For example: "Over 60% of all global EV sales in the last year occurred in a single region (e.g., East Asia). This presents both a risk of market dependency and a significant opportunity for growth in untapped markets like North America and Europe." This gives the audience a clear, strategic insight that is directly actionable for business expansion or policy incentives.

**c. Create a simple chart that shows global EV sales for the past 10 years, and write a brief explanation addressing the following questions:** [8 marks]

**Chart:** (A simple hand-drawn or described line chart)

A line chart titled "Global EV Sales Show Exponential Growth (2014-2024)".

- **X-axis:** Labeled "Year", with marks from 2014 to 2024.
- **Y-axis:** Labeled "Annual Sales (in millions)", starting at 0 and going up to a value just above the highest sales figure (e.g., 15 million).
- **Data Line:** A line that starts low and relatively flat from 2014 to 2020, then shows a very steep, upward curve from 2021 to 2024. The segment from 2021-2024 is highlighted in a different color (e.g., green). An annotation points to this steep section, reading "Market Acceleration Phase."

**Explanation:**

- **What do the data axes mean?**
  The horizontal x-axis represents time, specifically the years from 2014 to 2024. The vertical y-axis represents the quantity of global sales of electric vehicles, measured in millions of units sold per year.

- **What do the encodings mean (the value of the data points)?**
  The primary encoding is the vertical position of the line. The height of the line at any given year corresponds to the total number of EVs sold globally in that year. The continuous line itself represents the trend and change in sales over the decade. Color is used as a secondary encoding to draw attention to a specific period of interest.

- **What level of detail is presented?**
  The data is presented at an aggregated annual level. It shows the total global sales for each year, summarizing the data rather than showing more granular details like monthly or quarterly sales, or sales broken down by manufacturer or country.

- **What data points should the audience be looking at?**
  The audience should focus on two key aspects highlighted in the chart:
  1. The overall upward trend across the entire decade, showing consistent market growth.
  2. The dramatic, steep increase in the line from 2021 to 2024. This section is explicitly highlighted with a different color and an annotation to signify it as the most critical part of the data story—the period of exponential growth.

---

### **3. You are working with a dataset on student performance across multiple subjects. You want to use linked views to explore how students' performances in mathematics relate to their performances in science and other subjects.**

**a. Explain the concept of linked views which can be useful in analyzing data.** [4 marks]

Linked views is a powerful data visualization paradigm where multiple charts, or "views," of the same dataset are displayed simultaneously and connected to each other. When a user interacts with one view—for example, by selecting or "brushing" a subset of data points—the corresponding data points in all other linked views are instantly highlighted or filtered. This technique is extremely useful for exploring relationships and patterns in multivariate data, as it allows the analyst to see how a feature of interest in one context relates to features in other contexts.

**b. Explain TWO (2) main advantages of using linked views during exploratory data analysis.** [6 marks]

1. **Facilitates Exploration of Complex Relationships:** Linked views make it easier to uncover relationships in multivariate data that would be difficult to see in a single, static chart. A single chart can become overly complex and cluttered when trying to display more than a few variables. By breaking the data down into multiple, simpler views (e.g., several scatterplots or a map and a bar chart) and linking them, an analyst can fluidly explore how variables relate to each other. For example, they can see if a geographical pattern on a map corresponds to a specific distribution in a histogram.

2. **Improves Speed and Flexibility of Analysis:** The interactive nature of linked views provides great speed and flexibility. An analyst can quickly test different hypotheses on the fly by selecting different subsets of the data and immediately seeing the result across all views. This is much faster than manually creating separate, filtered charts for each hypothesis. This iterative process of "select and see" makes the exploratory stage of data analysis more efficient and intuitive.

**c. Create a simple chart that shows student performance in mathematics and science using linked views (e.g., linked scatterplots).** [10 marks]

**Chart Description:**

Two scatterplots are displayed side-by-side.

- **View 1 (Left Scatterplot):** Titled "Math vs. Science Scores". The x-axis is "Math Score" (0-100) and the y-axis is "Science Score" (0-100). Each point represents a student.
- **View 2 (Right Scatterplot):** Titled "Math vs. English Scores". The x-axis is "Math Score" (0-100) and the y-axis is "English Score" (0-100). Each point represents a student.

**Explanation:**

- **What do the data axes represent?**
  In View 1, the axes represent student scores in quantitative subjects: the x-axis for Mathematics and the y-axis for Science. In View 2, the axes compare a quantitative subject (Mathematics on the x-axis) with a humanities subject (English on the y-axis). Each axis scales from 0 to 100, representing the percentage score achieved.

- **How do the linked views work in this chart?**
  The two scatterplots are linked by student identity. When I use a "brushing" tool (e.g., dragging a rectangle) to select a group of students in View 1, the same students are instantly highlighted in View 2. For example, if I select the students in the top-right corner of View 1 (those who scored high in both Math and Science), those exact students will change color or size in View 2, showing where their English scores fall.

- **What insights can be drawn from using linked views in this analysis?**
  Using linked views here can reveal deeper insights into student performance profiles.
  - **Identifying Skill Clusters:** If I select students with high Math and Science scores and see they are also clustered in the high-score region of the English plot, it suggests a group of high-achieving, well-rounded students. Conversely, if they are scattered randomly in the English plot, it might indicate that strong STEM skills do not necessarily correlate with strong language skills in this student population.
  - **Discovering Hidden Patterns:** I could select students with low Math scores but high Science scores in View 1 (if any exist). The linked view would then show the English performance of this unusual group, potentially revealing a unique learning profile that would be missed by looking at simple correlations alone.
  - **Targeted Intervention:** This analysis could help educators identify groups for targeted support. For example, students strong in Math but weak in English could be identified for specific literacy programs.

---

### **4. You are tasked with visualizing a dataset that contains several categorical variables, including gender, age group, and income bracket. You decide to use a mosaic plot to display the relationships between these variables.**

**a. Explain with an example the challenges to visualize high-dimensional data.** [5 marks]

The primary challenge in visualizing high-dimensional data (data with many variables) is the "curse of dimensionality." As the number of variables increases, the data becomes sparse, and the visual space required to represent it grows exponentially. This leads to several problems:

- **Clutter and Overplotting:** Trying to represent many variables in a single 2D plot, like a scatterplot, results in a cluttered mess where data points overlap, hiding patterns.
- **Cognitive Overload:** A visualization with too many dimensions, such as a scatterplot matrix with 15 variables, becomes too complex for a human to interpret effectively.
- **Difficulty in Finding Patterns:** Meaningful patterns may exist in subspaces of 3 or 4 dimensions, but they are hidden when all dimensions are projected onto a 2D plane. For example, a clear cluster of customers might only become visible when looking at age, income, and spending frequency together, a relationship that is hard to visualize directly.

**b. Explain how a mosaic plot is useful in visualizing relationships between categorical variables.** [5 marks]

A mosaic plot is highly useful for visualizing relationships between two or more categorical variables because it represents data frequencies as rectangular areas. The total area of the plot is a square representing 100% of the data. This square is first divided based on the proportions of the first variable. Then, each of those rectangles is subdivided based on the proportions of the second variable, and so on.

This design allows an analyst to visually assess two key things:

1. **Frequencies:** The size of each rectangle is directly proportional to the number of observations in that specific combination of categories, making it easy to see which combinations are most common.
2. **Independence:** If two variables are independent, the dividing lines for the second variable will be aligned across the categories of the first variable. Deviations from this alignment visually highlight an association or relationship between the variables.

**c. Create a simple mosaic plot using categorical data such as gender (Male/Female), age group (Young/Adult/Senior), and income bracket (Low/Medium/High), the plot should answer the following questions.** [4 marks]

**Mosaic Plot Description:**

The variable order will be: Age Group -> Income Bracket -> Gender.

1. The plot starts as a square. It is first split vertically into three columns for "Young," "Adult," and "Senior," with the width of each column proportional to the percentage of people in that age group. Let's assume 'Adult' is the widest column.
2. Each of these three columns is then split horizontally into three rows for "Low," "Medium," and "High" income. The height of each row within a column is proportional to the income distribution _for that specific age group_.
3. Finally, each of the nine resulting rectangles is split vertically one last time for "Male" and "Female," based on the gender ratio _within that specific age and income cell_.

**d. With regards to your answer in part (c)**

**i. Explain the different sections of the mosaic plot.** [2 marks]

The plot is hierarchically sectioned. The first-level sections are the vertical columns representing the age groups (Young, Adult, Senior). The second-level sections are the smaller rectangles within each column, representing income brackets (Low, Medium, High). The third and smallest sections are the final subdivisions within each income rectangle, representing gender (Male, Female). The area of any given rectangle corresponds to the proportion of the total population that falls into that specific combination of categories (e.g., "Adult, High-Income, Female").

**ii. Show relationships between the categorical variables.** [2 marks]

Relationships are visible where the proportions change across categories. For example, we might see that the "High" income rectangle is much taller within the "Adult" and "Senior" columns compared to the "Young" column. This shows a clear relationship: income level is not independent of age group. Similarly, if the dividing line for gender is skewed heavily towards "Male" in the "High" income rectangles, it shows an association between gender and income.

**iii. Drive the key insights from the mosaic plot.** [2 marks]

Based on the described plot, a key insight could be: "Income level is strongly associated with age, with the proportion of individuals in the 'High' income bracket increasing significantly from the 'Young' to the 'Adult' group. Furthermore, within the 'High' income bracket across all age groups, Males are represented more frequently than Females, suggesting a potential interaction effect between age, income, and gender."

---

### **5. You are evaluating a data visualization design created to display the distribution of sales data across different regions. Using Munzer's nested model for visualization design,**

**a. explain the importance of defining the task and data when starting the process of visualization design.** [5 marks]

According to Munzer's nested model, defining the task and data is the outermost and most critical layer, known as "domain problem characterization." Its importance lies in preventing the primary threat to a visualization's validity: solving the wrong problem. If we do not first understand what the user needs to accomplish (the task) and the nature of their data, we might create a beautiful and technically impressive chart that is ultimately useless. For example, if the user's task is to compare the year-over-year growth of sales regions, but we design a pie chart showing the market share for the current year, we have failed, because the design does not support the user's task.

**b. explain how characterizing the task in the vocabulary of the problem domain help in creating an effective visualization.** [5 marks]

Characterizing the task in the problem domain's vocabulary is essential for ensuring the visualization is relevant and interpretable to its target audience. For a sales distribution visualization, this means talking to stakeholders (e.g., sales managers) and using their terms like "regional performance," "sales quotas," "market penetration," and "product line contribution." This process ensures that the visualization directly addresses their specific questions and aligns with their mental model of the business. It bridges the gap between the raw data and the business decisions the users need to make, resulting in a visualization that feels intuitive and directly supports their workflow, thus making it effective.

**c. Create the abstract and interactions needed for the sales distribution visualization.** [4 marks]

Following Munzer's model, we move from the domain problem to abstraction and technique design.

- **Abstraction (Data and Operations):**
  - **Data:** The data consists of quantitative values (sales figures) and categorical attributes (regions, product types).
  - **Operations:** The abstract tasks are to _compare_ sales totals between regions, _identify_ outliers (top and bottom regions), _filter_ to see data for a specific region, and _summarize_ the sales data.
- **Interactions (Encoding and Interaction Techniques):**
  - **Encoding:** We could use a bar chart where bar length encodes sales totals, or a choropleth map where color intensity encodes sales.
  - **Interaction:** To support the tasks, we need interactions like:
    1. A **dropdown menu** to select and filter by a specific product category.
    2. **Tooltips** on bars or map regions to reveal exact sales figures on hover.
    3. **Brushing and linking** between a map view and a bar chart view, so selecting a region on the map filters the bar chart to show the sales breakdown for just that region.

**d. List TWO (2) criteria you would use to evaluate the effectiveness of the final sales distribution visualization.** [6 marks]

1. **Effectiveness (Task Completion):** I would evaluate if the visualization effectively supports its intended tasks. This can be done through a user study where I give target users (e.g., sales managers) specific questions to answer using the visualization. For example, "Which region had the highest sales last quarter?" or "What is the sales trend for Product X in the Western region?" I would measure the accuracy of their answers and the time it takes them to find the information. High accuracy and low task completion time would indicate an effective design.

2. **Insight Generation (Qualitative Feedback):** Beyond task completion, a great visualization should lead to insights. I would conduct qualitative interviews with the users after they have used the tool. I would ask open-ended questions like, "What did you learn from this visualization that you didn't know before?" or "Did anything in the data surprise you?" The goal is to see if the visualization went beyond simply presenting numbers and helped the user discover new, actionable patterns or trends in the sales data. The discovery of unexpected insights is a strong indicator of an effective visualization.
