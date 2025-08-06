---
layout: default
title: Final Notes - Data Visualization
---

# Final Notes

Here are the critical notes for your last-minute final exam study on Data Visualization, based on the provided lecture slides.

### **Lecture 1: Introduction to Data Visualization**

**1. What is Data Visualization?**
*   **Definition:** The process of displaying data, often in large quantities, in a meaningful and graphical way to provide insights and support better decision-making. It transforms data into images that effectively and accurately represent information.
*   **Goal:** To explore, analyze, and present data. It helps in identifying trends, patterns, and areas of interest.
*   **DIKW Pyramid:** Data (raw facts) is transformed into Information (understandable by computers), then into Knowledge (understandable by humans), which finally leads to Action.
*   **Why it's important:**
    *   Less than 1% of the world's data has been analyzed.
    *   It makes large datasets understandable.
    *   It helps decision-makers to grasp key points quickly.

**2. Types of Data Visualization**
*   **Declarative (Static):** Used for communication when the information is already known.
    *   Examples: Infographics, graphic reports, static maps.
*   **Exploratory (Dynamic):** Used for data exploration and analysis when there are hypotheses to verify or when nothing is known.
    *   Examples: Dashboards, JavaScript charting, GIS maps.

**3. Key Questions for Framing a Visualization**
*   **Who is your audience?** Consider their literacy and information needs.
*   **What do they want to know?**
*   **How will you communicate?**

**4. Data Types**
*   **Nominal/Categorical:** Data sorted into groups or categories (e.g., countries, genders).
*   **Ordinal:** Categorical data that is ordered along a scale (e.g., low, medium, high).
*   **Discrete:** Numerical data with a finite number of possible values (e.g., number of cars).
*   **Continuous:** Numerical data measured along a sequence (e.g., temperature, height).

---

### **Lecture 2: Design Principles for Visualization**

**1. Key Design Principles**
*   **Hierarchy:** Use visual cues to show the most important parts of your message.
*   **Color:** Use sparingly to emphasize or reinforce values. Avoid the "Skittles effect" (too many colors). Be mindful of cultural meanings and ensure high contrast for color vision deficiencies.
*   **Balance:** Create a visually pleasing and balanced design.
*   **Contrast:** Use light/dark, big/small, thick/thin to highlight and emphasize.
*   **Font:** Choose appropriate fonts for your audience and be consistent.

**2. 10 Design Standards for Charts and Graphs**
1.  **Chart Format:** Choose the right format (print, web, projected) and resolution (300 dpi for print, 150 ppi for web/slides).
2.  **Color:** Use color to highlight data points. Ensure high contrast.
3.  **Text and Labels:** Use descriptive titles and labels. For some charts, place value labels directly on the data.
4.  **Readability:** Font face, size, and direction affect legibility. Avoid vertical or angled text.
5.  **Scales:** Use natural increments and start the y-axis at zero for vertical bar charts.
6.  **Data Integrity:** Show data accurately. Avoid 3D perspectives and ensure the "lie factor" is 1 (the size of the effect in the graphic equals the size of the effect in the data).
7.  **Chartjunk:** Remove non-essential elements like grids, shadows, and borders.
8.  **Data Density:** Avoid putting too much data in one graph. Use small multiples for complex datasets.
9.  **Data Richness:** Ensure data quality and effective filtering. For line charts with more than four series, consider a matrix of charts.
10. **Attribution:** Always cite your data source, including the year and chart author.

---

### **Lecture 3: The Audience**

**1. Optimizing the Data Story**
*   **Key Message:** Design graphics to make the key message obvious.
*   **Minimize Information Overload:**
    *   Humans have separate channels for visual and auditory information. Don't overwhelm one channel.
    *   Presentations have three components: words, images, and sound.
*   **Maximize Retention:**
    *   Engage the audience in active learning.
    *   Information is processed from sensory memory to working memory to long-term memory.

**2. Strategies for Maximizing Retention and Minimizing Overload**
1.  **Design for Easy Perception:**
    *   Use **pre-attentive attributes** (color, form, movement, spatial position) to draw attention to key insights in under 250 milliseconds.
2.  **Reinforce the Message:**
    *   Place text and graphics near each other.
    *   Avoid irrelevant words and pictures.
3.  **Build on Prior Knowledge:**
    *   Use surveys or ask questions to understand the audience's existing knowledge.
    *   **Perception questions** gauge skill levels; **content questions** assess knowledge.
4.  **Show Interpretable Displays:**
    *   Consider the audience's **visual literacy**. Use familiar chart types. For example, a line chart is often easier to interpret for comparing variables over time than a radar chart.

---

### **Lecture 4: Linked Views**

**1. What are Linked Views?**
*   **Definition:** Multiple views of data where an interaction in one view modifies the display of data in all other linked views.
*   **Motivation:** To explore relationships in multivariate data that are hard to see in a single complex plot.
*   **Advantages:**
    *   Ease of navigation.
    *   Speed and flexibility in portraying different data aspects.
    *   Applicable to complex data structures like geospatial data.

**2. Techniques for Interaction**
*   **Brushing:** A fixed shape (rectangle or circle) is dragged over a view to highlight data.
*   **Lassoing:** The user draws a free-form shape to select data points.
*   **Rectangle/Rubber-band Selection:** The user clicks and drags to define a rectangular selection area.

**3. Types of Linking Structures**
*   **Linking Frames:** Ensures consistent frame sizes for accurate comparison.
*   **Linking Models:** Links the underlying statistical models of plots (e.g., histogram bin sizes).
*   **Linking Types:** Links visual properties like color across plots.
*   **Linking Sample Populations:** Connects displays for user interactions.
    *   **Identity Linking:** Links observations of the same case across different plots.
    *   **Hierarchical Linking:** Links data at different aggregation levels (e.g., city, state, country).
    *   **Neighborhood/Distance Linking:** Used in geographic maps to investigate local effects and compare a location to its neighbors.

---

### **Lecture 5: High-dimensional Data Visualization**

**1. What is High-Dimensional Data?**
*   Data where the number of features (variables) is close to or larger than the number of observations (data points).
*   Common in fields like biology.
*   Difficult to visualize with standard tools.

**2. Visualization Techniques**
*   **Mosaic Plot:** Visualizes categorical data, showing relationships between variables. The order of variables is crucial.
*   **Trellis Display (Small Multiples):** A grid of plots conditioned on different subgroups of the data. Uses a common scale for effective comparison. **Shingling** is the process of converting a continuous variable into a discrete one for use in trellis displays.
*   **Heatmap:** A graphical representation where values are depicted by color. Excellent for showing multivariate data with many variables.
*   **Multivariate Scatter Plot (Scatterplot Matrix):** A grid of scatterplots showing the relationship between all pairs of variables in a dataset.
*   **Parallel Coordinate Plot (PCP):** Represents each data point as a line that connects points on parallel axes, where each axis represents a variable. Useful for identifying clusters, outliers, and trends.
    *   **α-blending (transparency)** can be used to handle overplotting.

---

### **Lecture 6: Map Data Visualization (Parts 1 & 2)**

**1. Fundamentals of Maps**
*   **Definition:** A representation or abstraction of geographic reality used to present geographic information.
*   **Map Elements:**
    *   **Fundamental:** Title, Legend.
    *   **Marginal Information:** Scale, North Arrow, Map Datum, Projection, Author, Lineage (data sources, dates).

**2. Types of Maps**
*   **Topographic Map:** Visualizes the Earth's surface as accurately as possible, including infrastructure and land features.
*   **Thematic Map:** Represents the distribution of a particular theme (e.g., population density, socio-economic data).
    *   **Choropleth Map:** A thematic map where areas are shaded or colored to represent the magnitude of an attribute. It's best for showing rates or densities, not raw counts. Use equal-area projections for accuracy.

**3. Visual Hierarchy and Contrast**
*   Use contrast in color, size, and shape to create a visual hierarchy that guides the user's attention to the most important information on the map.

**4. Mapping Data Types**
*   **Qualitative Data:** Use colors of equal visual weight to differentiate between categories (e.g., land use types). Avoid using shades of one color or overly bright, unbalanced colors.
*   **Quantitative Data:**
    *   **Absolute Quantities (Counts):** Proportional symbols are often effective.
    *   **Relative Quantities (Densities, Ratios):** Use a color ramp (e.g., light to dark) in a choropleth map to show variations.
*   **Time Series Data:** Can be shown in a single map, a series of maps, or an animation.

**5. Map Dissemination**
*   **Static Map:** For view only (e.g., preview on a website).
*   **Dynamic Map:** Allows for zooming, panning, and choosing data layers.
*   **Interactive Map:** Fully interactive, often in 3D (e.g., using VRML).
*   **On-Screen vs. Multimedia Maps:** On-screen maps are for quick views and links, while multimedia maps integrate sound, video, and animation.

---

### **Lecture 7: Data Visualization Evaluation**

**1. Nested Model for Visualization Design and Validation**
*   A four-layer model for designing and validating visualizations by identifying threats to validity at each level.
    1.  **Domain Problem Characterization:** (Threat: wrong problem) -> Validate by observing and interviewing users.
    2.  **Data/Operation Abstraction Design:** (Threat: bad data abstraction) -> Validate by testing on target users.
    3.  **Encoding/Interaction Technique Design:** (Threat: ineffective encoding) -> Validate through lab studies and measuring user performance.
    4.  **Algorithm Design:** (Threat: slow algorithm) -> Validate by analyzing computational complexity and measuring system performance.

**2. Evaluation Criteria**
*   A great data visualization should be:
    *   **Useful:** Relevant and approachable for the audience.
    *   **Engaging:** Visually appealing to grab attention.
    *   **Clear:** Clearly illustrates the data without trying to trick or persuade.

**3. Evaluation Methods**
*   Evaluation can occur at any stage of development (predesign, design, prototype, etc.).
*   **User testing** is a common and effective method.
*   Measuring success can be **easy** (e.g., counting views) or **difficult** (e.g., measuring emotional response).
*   **Sociocultural context** (e.g., user background, beliefs, emotions) significantly impacts how a visualization is received and understood.

**4. Measuring Understanding**
*   Go beyond simple metrics like speed and accuracy.
*   Ask open-ended questions at different levels of comprehension (Knowledge, Comprehension, Application, Analysis, Synthesis, Evaluation) to gauge true understanding. For example: "What did you find interesting or surprising?" or "What is the overall message of this visualization?"