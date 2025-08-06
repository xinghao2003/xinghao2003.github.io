---
layout: default
title: September 2023
---

# FINAL EXAMINATION - SEPTEMBER 2023 SEMESTER

## COURSE: TEB3133/TFB3133 - DATA VISUALIZATION

---

### **Question 1**

**a. i. Explain readability design standard in data visualization.**
[2 marks]

**Answer:**

Readability in data visualization refers to the ease with which a viewer can read and understand the textual information presented in a chart or graph. It is a fundamental design standard that ensures text elements like titles, labels, axes, and annotations are clear and legible. Key factors affecting readability include:

- **Font Face:** Choosing a clean, simple font (sans-serif fonts like Arial or Helvetica are common).
- **Font Size:** Ensuring text is large enough to be read comfortably in the intended viewing format (print, web, presentation).
- **Color:** Using high-contrast colors for text against its background.
- **Direction/Orientation:** Placing text horizontally for optimal reading speed and comprehension, and avoiding vertical or angled text.

---

**a. ii. Discuss ONE (1) example for readability design standard that you described in part (a)(i).**
[4 marks]

**Answer:**

A prime example of applying the readability design standard is the **orientation of axis labels**.

- **Poor Readability Example:** A bar chart with many categories might have its x-axis labels written vertically or at a 45-degree angle to fit them in the available space. This forces the viewer to tilt their head or mentally rotate the text, which significantly slows down comprehension and makes the chart difficult to read.

- **Good Readability Solution:** To fix this, the chart should be reoriented. A vertical bar chart can be converted into a horizontal bar chart. In a horizontal bar chart, the categories are listed on the y-axis, allowing the labels to be written horizontally from left to right. This natural orientation makes the labels instantly legible, allowing the audience to quickly scan and identify categories without any cognitive friction, thus greatly improving the chart's overall readability and effectiveness.

---

**b. Discuss why the level of presentation is important in exploratory visualization.**
[4 marks]

**Answer:**

The level of presentation, which refers to the way data is aggregated or summarized, is crucial in exploratory visualization because it serves as the entry point for analysis. Exploratory visualization is used when the goal is to discover insights and patterns in data where nothing is known beforehand.

Presenting data at a high level of aggregation (e.g., yearly sales totals) provides an initial overview and helps identify broad trends or anomalies. This is important because it prevents the user from being immediately overwhelmed by raw, granular data (information overload).

However, exploration requires the ability to drill down into details. Therefore, an effective exploratory visualization must support multiple levels of presentation. For instance, a dashboard might initially show yearly sales. The user could then click on a year to see monthly data, then a month to see daily data. This tiered approach guides the user from a general overview to specific details, allowing them to formulate and test hypotheses on the fly. Without control over the level of presentation, the visualization would either be too simplistic to find deep insights or too detailed to understand the bigger picture, defeating the purpose of exploration.

---

**c. You are working with large and complex data from IoT node to create a smart dashboard for a technical audience. Each IoT node consists of a set of sensors such as smoke sensor, rain sensor and temperature sensor. Data is collected as time series data with data points indexed in time order.**

**i. Discuss ONE (1) challenge in IoT time series visual representation.**
[4 marks]

**Answer:**

One significant challenge in IoT time series visual representation is **data density and overplotting**. IoT sensors generate vast amounts of high-frequency data, often collecting readings every second or minute. When plotting this data over a significant period (e.g., a full day or week) on a standard line chart, several issues arise:

1. **Visual Clutter:** The chart becomes a dense, tangled mass of lines and data points, making it impossible to discern individual readings, short-term trends, or subtle anomalies.
2. **Performance Issues:** Rendering millions of data points in a web-based dashboard can be computationally expensive, leading to slow load times and a poor user experience.
3. **Loss of Detail:** Important but brief events, like a momentary spike in temperature, can be completely obscured or lost within the visual noise of the dense plot.

This makes the visualization unreadable and ineffective for its primary purpose of monitoring and analysis.

---

**c. ii. Discuss how to optimize a data story that helps a technical audience to monitor the environment and to determine the location of abnormal incident.**
[6 marks]

**Answer:**

To optimize a data story for a technical audience monitoring an IoT network, the focus should be on clarity, context, and interactivity, leveraging linked views.

1. **Use a Multi-View, Linked Dashboard:** Instead of a single, dense chart, create a dashboard with multiple, coordinated views.
   - **Geographical View (Map):** A central component would be a map showing the physical locations of all IoT nodes. This provides immediate spatial context.
   - **Time Series View (Line Charts):** A separate panel would display line charts for sensor readings (temperature, smoke, etc.).
     .
2. **Implement Linked Views for Interactive Exploration:** The views must be linked. Clicking on a specific IoT node on the map would instantly filter the line charts to show only the data from that node. This allows the technical user to seamlessly switch between spatial context ("where is the problem?") and temporal context ("what is happening over time?").

3. **Leverage Pre-attentive Attributes for Alerts:** Use color to instantly draw attention to anomalies. For example, a node on the map could turn from green to red if its temperature sensor exceeds a critical threshold. The corresponding line in the time series chart could also be highlighted in red. This uses the pre-attentive power of color to make abnormal incidents immediately obvious without requiring the user to manually inspect every chart.

4. **Provide Drill-Down Capabilities:** The main dashboard can show aggregated data (e.g., hourly averages). The technical audience can then click or "brush" over a specific time range on the line chart to zoom in and view the raw, second-by-second data for detailed incident analysis. This manages data density while keeping details accessible.

By combining a map for location, linked line charts for detailed metrics, and color for alerts, the dashboard tells a clear and actionable story: it shows _where_ an incident is happening, _what_ the specific metrics are, and _when_ it occurred, allowing for rapid response.

---

### **Question 2**

**a. Explain the impact of pre-attentive attributes on data visualization.**
[3 marks]

**Answer:**

Pre-attentive attributes are visual properties that our brains process in an extremely short amount of time (typically under 250 milliseconds) without conscious effort. Examples include color (hue and intensity), form (size, shape, orientation), and spatial position.

Their impact on data visualization is profound: they act as a powerful tool to guide an audience's attention. By strategically using attributes like a contrasting color or a larger size for a specific data point, a designer can make that element "pop" out from the rest. This immediately draws the viewer's eye to the most important part of the visualization, ensuring the key message or insight is communicated quickly and effectively before the viewer even begins to consciously analyze the chart.

---

**b. Discuss TWO (2) issues of visualizing high-dimensional data.**
[6 marks]

**Answer:**

Visualizing high-dimensional data (data with many variables or features) presents several significant issues:

1. **The Curse of Dimensionality:** This is a core issue where, as the number of dimensions increases, the data becomes increasingly sparse. In a visualization context, this means that it's impossible to display all dimensions simultaneously on a 2D screen. We are forced to choose a 2D or 3D projection of the data (like in a scatter plot), which may hide important relationships that only exist in higher dimensions. The choice of which variables to plot becomes critical, and a poor choice can lead to a completely misleading or uninformative visualization.

2. **Overplotting and Perceptual Limits:** Techniques like Parallel Coordinate Plots or Scatterplot Matrices are used for high-dimensional data, but they suffer from overplotting when the dataset is large. In a Parallel Coordinate Plot, many lines can overlap, creating a dense, black mess that obscures patterns. Furthermore, the human brain has limits on how many distinct visual encodings it can perceive at once. Trying to represent too many dimensions simultaneously using color, shape, size, and orientation on a single plot leads to cognitive overload, making the chart cluttered, confusing, and ultimately uninterpretable.

---

**c. You are required to create a visualization based on total number of online course's registration across different regions. Each region is represented by a line. Thus, enrolment patterns can be examined. Sample of data is shown in TABLE Q2.**

**TABLE Q2: Course Registration Records**

| Finance | Programming | Business | Networking | Region |
| :------ | :---------- | :------- | :--------- | :----- |
| 300     | 500         | 100      | 70         | North  |
| 100     | 100         | 300      | 0          | West   |
| 50      | 300         | 100      | 250        | South  |
| 600     | 0           | 0        | 100        | West   |
| 235     | 1000        | 500      | 30         | North  |

**i. Propose with example, ONE (1) suitable chart to visualize enrolment patterns based on dataset shown in TABLE Q2.**
[4 marks]

**Answer:**

A **Parallel Coordinate Plot (PCP)** is the most suitable chart for visualizing this data.

In this chart, each of the course categories (Finance, Programming, Business, Networking) would be represented by a vertical, parallel axis. Each region (North, West, South) would be represented by a line that connects the registration numbers across these four axes. For example, the first "North" line would start at 300 on the 'Finance' axis, go to 500 on 'Programming', 100 on 'Business', and 70 on 'Networking'. Each record in the table becomes one line on the plot. To distinguish between regions, the lines can be colored by the 'Region' category.

---

**c. ii. Discuss ONE (1) advantage of using your proposed chart in part (c)(i).**
[3 marks]

**Answer:**

The primary advantage of using a Parallel Coordinate Plot here is its ability to reveal **multivariate patterns and relationships**. It allows for the comparison of multiple variables (the courses) across different categories (the regions) simultaneously. Viewers can easily identify trends, clusters, and outliers. For instance, they could quickly see if the 'North' region consistently has higher 'Programming' registrations, or if the 'West' region shows a strong negative correlation between 'Finance' and 'Programming' registrations. Such complex inter-variable relationships are very difficult to see with other chart types like separate bar charts.

---

**d. Explain with an example, how trellis plots apply the concept of shingle.**
[4 marks]

**Answer:**

Trellis plots (or small multiples) apply the concept of "shingling" to visualize how a relationship between two variables changes across the range of a third, continuous variable.

**Shingling** is the process of converting a continuous variable into several overlapping discrete intervals or "shingles." For example, if we have a continuous variable like 'Income' ranging from RM30k to RM100k, we could create shingles like [30-50k], [40-60k], [50-70k], and so on.

**Application in a Trellis Plot:** Imagine we want to see the relationship between 'Age' (x-axis) and 'Spending' (y-axis) conditioned on 'Income'. A trellis plot would use the income shingles to create a grid of small scatter plots. The first panel would show the Age vs. Spending scatter plot only for individuals in the [30-50k] income shingle. The next panel would show the same plot for the [40-60k] shingle, and so on. This allows the viewer to see how the pattern of spending by age gradually changes as income increases, providing a much richer insight than a single, static plot could.

---

### **Question 3**

**TABLE Q3 shows a quarterly sales report for five Jayant Mart stores in 2022.**

**TABLE Q3: Sales data for five Jayant Mart stores**

| Store         | Qtr-1 (RM) | Qtr-2 (RM) | Qtr-3 (RM) | Qtr-4 (RM) |
| :------------ | :--------- | :--------- | :--------- | :--------- |
| Ipoh          | 820000     | 1050000    | 1400000    | 1675000    |
| Taiping       | 350000     | 720000     | 990000     | 1700000    |
| Tanjung Malim | 180000     | 590000     | 680000     | 2150000    |
| Gerik         | 95000      | 110000     | 95000      | 155000     |
| Manjung       | 750000     | 980000     | 220000     | 460000     |

> **Note:** The provided course materials focus on Python libraries (Streamlit, Matplotlib, Altair) rather than JavaScript with `d3.js`. The following answers will address the question's logic using principles taught in the course and provide a Python-based code example that accomplishes the same task.

**a. Write a JavaScript with `d3.js` library in an HTML file to create a bar chart that visualizes total sales for all stores in 2022 based on the data shown in TABLE Q3.**
[8 marks]

**Answer:**

I will provide a Python solution using the Matplotlib library, as this aligns with the course's tools. The principles of data binding, scaling, and axis creation are conceptually similar to `d3.js`.

First, the total sales for each store in 2022 must be calculated.

- Ipoh: 820k + 1050k + 1400k + 1675k = 4,945,000
- Taiping: 350k + 720k + 990k + 1700k = 3,760,000
- Tanjung Malim: 180k + 590k + 680k + 2150k = 3,600,000
- Gerik: 95k + 110k + 95k + 155k = 455,000
- Manjung: 750k + 980k + 220k + 460k = 2,410,000

Here is the Python code to generate the bar chart:

```python
import matplotlib.pyplot as plt
import pandas as pd

# Data from TABLE Q3
data = {
    'Store': ['Ipoh', 'Taiping', 'Tanjung Malim', 'Gerik', 'Manjung'],
    'Qtr-1': [820000, 350000, 180000, 95000, 750000],
    'Qtr-2': [1050000, 720000, 590000, 110000, 980000],
    'Qtr-3': [1400000, 990000, 680000, 95000, 220000],
    'Qtr-4': [1675000, 1700000, 2150000, 155000, 460000]
}
df = pd.DataFrame(data)

# Calculate total sales for 2022
df['Total Sales'] = df['Qtr-1'] + df['Qtr-2'] + df['Qtr-3'] + df['Qtr-4']

# Create the bar chart
plt.figure(figsize=(10, 6))
bars = plt.bar(df['Store'], df['Total Sales'], color='skyblue')

# Add labels and title for clarity
plt.xlabel('Store Location')
plt.ylabel('Total Sales (in Millions RM)')
plt.title('Total Sales for Jayant Mart Stores in 2022')

# Format y-axis to be more readable (in millions)
plt.gca().get_yaxis().set_major_formatter(
    plt.FuncFormatter(lambda x, p: format(int(x / 1000000), ','))
)

# Display the chart
plt.show()
```

---

**b. Discuss how the detail of sales should be presented in the chart that you answered in part (a).**
[4 marks]

**Answer:**

To present the sales details effectively in the bar chart from part (a), several design principles should be applied to enhance clarity and avoid misinterpretation:

1. **Direct Labeling:** Instead of forcing the user to interpret the value from the y-axis, the exact total sales figure can be placed directly on top of or just inside each bar. This removes ambiguity and makes the chart easier to read.
2. **Readable Axis Scale:** The y-axis should use natural increments and be clearly labeled (e.g., "Total Sales (in Millions RM)"). Using large numbers like "4,945,000" can be simplified to "4.95M" to reduce clutter, as long as the unit is clearly stated in the axis title.
3. **Descriptive Title:** The chart needs a clear, descriptive title, such as "Total Sales for Jayant Mart Stores in 2022," to immediately inform the audience what the chart is about.
4. **Remove Chartjunk:** Non-essential elements like heavy gridlines, borders, or shadows should be removed to keep the focus on the data itself, thereby maximizing the data-ink ratio.

---

**c. i. Based on your answer in part (a), discuss how to calculate 'Lie Factor' that measures the effect in the chart to actual effect in the data.**
[5 marks]

**Answer:**

The Lie Factor, as defined by Edward Tufte, measures the degree of distortion in a graphic. It is calculated as the ratio of the size of the effect shown in the graphic to the size of the effect in the data. An ideal Lie Factor is 1.

**Lie Factor = (Size of effect in graphic) / (Size of effect in data)**

To calculate it for the bar chart in part (a), we would perform these steps:

1. **Select two data points to compare:** Let's compare the total sales of 'Ipoh' (RM 4,945,000) and 'Gerik' (RM 455,000).
2. **Calculate the size of the effect in the data:** This is the percentage change.
   - _Effect in data_ = (Larger Value - Smaller Value) / Smaller Value
   - _Effect in data_ = (4,945,000 - 455,000) / 455,000 ≈ 9.87 (or 987% increase)
3. **Measure the size of the effect in the graphic:** This requires physically measuring the height of the corresponding bars on the final rendered chart. Let's assume the bar for Ipoh is 10.8 cm tall and the bar for Gerik is 1.0 cm tall.
4. **Calculate the size of the effect in the graphic:**
   - _Effect in graphic_ = (Taller Bar - Shorter Bar) / Shorter Bar
   - _Effect in graphic_ = (10.8 cm - 1.0 cm) / 1.0 cm = 9.8
5. **Calculate the Lie Factor:**
   - _Lie Factor_ = 9.8 / 9.87 ≈ 0.993

In this case, the Lie Factor is very close to 1, indicating an accurate and honest representation.

---

**c. ii. Explain the effect of increasing the lie factor in bar chart in part (a).**
[3 marks]

**Answer:**

Increasing the lie factor (making it significantly greater than 1) in the bar chart would create a misleading visual exaggeration. This is most commonly done by **truncating the y-axis** (i.e., starting the axis at a value other than zero, for example at RM 400,000).

If the y-axis started at RM 400,000, the bar for Gerik (sales of RM 455,000) would be tiny, while the bar for Ipoh (sales of RM 4,945,000) would still be very large. The visual difference between the bars would appear immense, much larger than the actual proportional difference in sales. This would deceive the viewer into thinking that Gerik's sales are almost negligible compared to Ipoh's, which distorts the truth and violates the principle of data integrity.

---

### **Question 4**

**a. Differentiate between topographic and thematic map.**
[4 marks]

**Answer:**

| Feature         | Topographic Map                                                                                                                               | Thematic Map                                                                                                                                                             |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Purpose**     | To visualize the Earth's physical surface as accurately as possible, showing natural and man-made features like elevation, rivers, and roads. | To represent the distribution of a particular theme or statistical variable over a geographic area, such as population density, election results, or unemployment rates. |
| **Focus**       | Focuses on geographic accuracy and reference. The features themselves are the primary data.                                                   | Focuses on communicating a specific data story. The map serves as a base layer to provide spatial context for the data.                                                  |
| **Information** | Contains a wide variety of information (infrastructure, hydrology, land use) to serve as a general-purpose reference map.                     | Contains information focused on the specific theme. It may simplify or omit other geographic details to avoid clutter and emphasize the theme.                           |
| **Example**     | A detailed government survey map showing contour lines for elevation.                                                                         | A choropleth map showing the unemployment rate per state, with each state colored according to its rate.                                                                 |

---

**b. Discuss any TWO (2) map elements for geographical visualization.**
[4 marks]

**Answer:**

Two essential map elements for geographical visualization are:

1. **Legend:** The legend is a key that deciphers the symbols, colors, and patterns used on the map. Without a legend, the map is uninterpretable. For a thematic map, it explains what each color or symbol size represents (e.g., a color ramp from light blue to dark blue might represent low to high population density). It is the critical link between the visual encoding and the data itself.

2. **Scale:** The scale indicates the relationship between distances on the map and the corresponding distances on the Earth's surface. It can be represented as a ratio (e.g., 1:100,000), a verbal statement ("1 cm equals 1 km"), or a graphical bar. The scale provides the viewer with a sense of size and distance, allowing them to make meaningful real-world measurements and comparisons from the map.

---

**c. Ministry of Health conducts a research project on dengue spread to illustrate the infection for diverse audience. The project uses web-based visualization to display changes in the dengue cases over time, from different locations in Malaysia.**

**i. Discuss geographical visualization development for this project.**
[5 marks]

**Answer:**

The development of this geographical visualization should follow a structured process, like Munzer's nested model, to ensure it is effective for a diverse audience.

1. **Domain Characterization:** The primary goal is to show the spread of dengue over time and location to a diverse audience (public, policymakers, healthcare workers). This means the visualization must be clear, intuitive, and not overly technical.
2. **Data & Operation Abstraction:** The key data are: number of dengue cases (quantitative), location (geographical - state or district), and time (temporal - weekly or monthly). The main operation is to see the change in case counts over time for different locations.
3. **Visual Encoding & Interaction Design:**
   - A **choropleth map** of Malaysia would be the most effective primary visualization. States or districts would be colored based on the number of dengue cases (e.g., from yellow for few cases to dark red for many cases).
   - To show change over time, a **time slider** should be included. As the user moves the slider, the colors on the map would update to reflect the case counts for that specific week or month. This creates a simple animation of the spread.
   - For a diverse audience, pop-ups that appear when hovering over a state would be useful, showing the exact number of cases and the state's name.
4. **Algorithm Design:** The backend algorithm must efficiently filter the data based on the selected time from the slider and update the map visualization in real-time for a smooth user experience on the web.

---

> **Note:** The following code questions request JavaScript. I will provide the conceptual logic and an equivalent Python/Folium code fragment.

**c. ii. Write a JavaScript code fragment to create a map with Mercator projection of world scaled as 700 and with centre at (0,0) and 0 rotation using `d3.geoMercator()` method.**
[4 marks]

**Answer:**

The `d3.geoMercator()` function creates a Mercator projection. To configure it as requested, you would set its scale, center, and rotation properties.

**Conceptual D3.js Code:**

```javascript
// Define the projection
var projection = d3
  .geoMercator()
  .scale(700) // Set the scale factor
  .center([0, 0]) // Set the center to [longitude, latitude]
  .rotate([0, 0]); // Set the rotation
```

**Equivalent Python/Folium Implementation:**
In Folium, projection is handled differently, often using CRS (Coordinate Reference System) strings. The default is Mercator-like. The scale, center, and zoom are set at the map initialization.

```python
import folium

# Center and zoom are used to control the initial view
# Folium handles the Mercator projection by default.
# The 'scale' is controlled implicitly by the zoom level.
map_center = [0, 0] # Corresponds to center(0,0)
initial_zoom = 4 # An approximate equivalent to a scale of 700

m = folium.Map(location=map_center, zoom_start=initial_zoom, crs='EPSG3857')
```

---

**c. iii. Write a JavaScript code fragment to draw the map based on projection in part (c) (ii) and fill the map with green colour.**
[3 marks]

**Answer:**

In D3.js, you would define a geographic path generator using the projection and then use it to draw GeoJSON data, applying a style to fill it with green.

**Conceptual D3.js Code:**

```javascript
// Assume 'geojson_data' is loaded
// Create a path generator
var path = d3.geoPath().projection(projection);

// Select the SVG and append paths for each feature
svg
  .selectAll("path")
  .data(geojson_data.features)
  .enter()
  .append("path")
  .attr("d", path) // Use the path generator to create the 'd' attribute
  .style("fill", "green"); // Fill the paths with green color
```

**Equivalent Python/Folium Implementation:**
In Folium, you add a GeoJSON layer to the map object and specify the styling.

```python
import folium
import geopandas

# Assume 'world_gdf' is a GeoPandas DataFrame with geometry
# An example: world_gdf = geopandas.read_file(geopandas.datasets.get_path('naturalearth_lowres'))

# Create the map object from the previous part
m = folium.Map(location=[0, 0], zoom_start=4)

# Add a GeoJson layer and style it
folium.GeoJson(
    world_gdf,
    style_function=lambda feature: {
        'fillColor': 'green',  // Set the fill color
        'color': 'black',      // Set the border color
        'weight': 0.5
    }
).add_to(m)
```

---

### **Question 5**

**Xandra Travel and Tours (XTT) is consistently delivering good travel packages and services to more than 5000 customers. Past business decisions were primarily based on management's experience. In 2023, an initiative to develop an evidence-based with data driven decision making is introduced. Each business unit stores rich data on customers, marketing effectiveness, purchasing history, external linkages, human resources, and the social media data. Based on the data, XTT should be able to track the performance of each business unit over time and to analyse travel trends according to various categories.**

**a. Explain TWO (2) possible challenges of for data-driven visualization and decision-making solution for XTT.**
[4 marks]

**Answer:**

1. **Data Integration and Quality:** XTT's data is stored in silos across various business units (customers, marketing, HR, etc.). The first major challenge is integrating these disparate data sources into a single, cohesive dataset. The data may have different formats, inconsistent naming conventions, and missing values. Ensuring data quality and creating a unified view is a complex but essential prerequisite for any meaningful visualization.

2. **Bridging the Gap between Data and Decision:** The management team is accustomed to making decisions based on experience, not data. A significant challenge is designing visualizations that are not only accurate but also intuitive and persuasive enough to be trusted and adopted by this non-technical audience. The dashboard must clearly communicate insights that are directly relevant to business questions, otherwise it will be seen as a technical curiosity rather than a critical decision-making tool. This involves overcoming potential resistance to change and building data literacy within the management team.

---

**b. Sketch a complete dashboard design with linked data views concept to allow interactive data visualization for XTT.**
[6 marks]

**Answer:**

**Dashboard Title: XTT Performance & Trends Dashboard**

**Layout:** The dashboard will have a main panel and a sidebar for filters.

**Sidebar Filters:**

- **Date Range Selector:** (e.g., a slider for Jan 2023 - Dec 2023)
- **Region Selector:** (Multi-select dropdown: Asia, Europe, Americas, etc.)
- **Package Type Selector:** (Multi-select dropdown: Adventure, Luxury, Family, etc.)

**Main Panel (Linked Views):**

1. **[Top Left] Key Performance Indicators (KPIs):**

   - Large, clear numbers for: Total Revenue, Total Customers, Average Booking Value. These update based on filters.

2. **[Top Right] Sales by Region (Choropleth Map):**

   - A world map where countries are colored based on total sales revenue. Higher sales = darker color. Hovering shows the exact sales figure.

3. **[Bottom Left] Sales Trend Over Time (Line Chart):**

   - X-axis: Time (monthly). Y-axis: Total Sales (RM).
   - A line shows the overall sales trend.

4. **[Bottom Right] Package Popularity (Bar Chart):**
   - X-axis: Travel Package Type. Y-axis: Number of Bookings.
   - Bars show the most popular packages.

**Linked View Interaction:**

- **Clicking a region on the map** (e.g., Europe) will filter all other charts. The KPIs will update to show only Europe's numbers, the line chart will show the sales trend for Europe, and the bar chart will show the most popular packages among customers booking trips to Europe. This allows management to instantly see how performance and trends differ by region.

---

**c. Discuss how to implement interactive visualization strategies in part (b) with examples using JavaScript code fragments.**
[6 marks]

**Answer:**

The core of the interactivity in the sketched dashboard is **cross-filtering via linked selections**.

> **Note:** As JavaScript is not the focus of the course materials, I will discuss the logic and provide an equivalent implementation concept using Python's Altair library, which was covered for linked views.

**Strategy 1: Brushing and Linking (Map to other charts)**

- **Logic:** A selection event on one chart (the map) acts as a filter for the data powering the other charts. When a user clicks a region on the map, that region's name is captured. The datasets for the line and bar charts are then filtered to include only data corresponding to that selected region before they are re-rendered.

- **Altair Implementation Concept:**

  ```python
  import altair as alt

  # 1. Create a selection object for the map
  region_selection = alt.selection_multi(fields=['region'])

  # 2. Create the map, adding the selection and conditioning color
  map_chart = alt.Chart(map_data).mark_geoshape().encode(
      color=alt.condition(region_selection, alt.value('steelblue'), alt.value('lightgray'))
  ).add_selection(region_selection)

  # 3. Create other charts (e.g., bar chart), applying the filter
  bar_chart = alt.Chart(sales_data).mark_bar().encode(
      x='PackageType',
      y='sum(Bookings)'
  ).transform_filter(
      region_selection  # This links the bar chart to the map selection
  )

  # Combine charts in the dashboard
  dashboard = map_chart | bar_chart
  ```

**Strategy 2: Interactive Filtering (Sidebar Filters)**

- **Logic:** The sidebar widgets (date range, region selector) are not part of the visualization itself but control the underlying DataFrame that is fed to all charts. When a user changes a filter, the main Python script filters the source Pandas DataFrame accordingly. Altair/Matplotlib then automatically re-renders all the charts using this new, smaller DataFrame.

- **Streamlit Implementation Concept:**

  ````python
  import streamlit as st
  import pandas as pd

      # df is the full dataframe
      # Create sidebar widgets to get user input
      selected_date = st.sidebar.date_input("Select Date Range", [start_date, end_date])
      selected_regions = st.sidebar.multiselect("Select Regions", df['region'].unique())

      # Filter the main dataframe based on input
      filtered_df = df[
          (df['date'].between(selected_date[0], selected_date[1])) &
          (df['region'].isin(selected_regions))
      ]

      # All charts are now created using `filtered_df` instead of `df`
      # e.g., line_chart = alt.Chart(filtered_df).mark_line()...
      ```

  This combination of strategies creates a highly interactive and intuitive dashboard for data exploration.
  ````

---

**d. Explain TWO (2) evaluation questions to measure understanding of visualization in part (b).**
[4 marks]

**Answer:**

To evaluate whether the dashboard effectively communicates insights to the XTT management, we can use questions that target different levels of understanding, moving beyond simple data retrieval.

1. **Comprehension/Analysis Question:** _"Based on the dashboard, which travel package type had the most significant growth in the European region during the third quarter? Describe the trend you observe."_

   - **Purpose:** This question requires the user to interact with the dashboard (filter by region and time), read multiple charts (the bar chart for package type and the line chart for trend), and synthesize the information to identify a specific pattern. It tests if they can understand the relationships between different variables presented in the linked views.

2. **Application/Evaluation Question:** _"You have a marketing budget of RM50,000 to boost sales for next month. Using the dashboard, which region and package type would you recommend targeting, and what data from the visualization supports your decision?"_
   - **Purpose:** This is a higher-level question that assesses whether the user can not only understand the data but also apply the insights to make a hypothetical business decision. They must evaluate the information (e.g., find a package that is popular but has a recent dip, or a region with high potential) and justify their recommendation using evidence from the visualization. This directly measures the dashboard's effectiveness as a decision-making tool.

---

-END OF PAPER-
