---
layout: default
title: Streamlit & Data Visualization Cheatsheet
---

### Streamlit & Data Visualization Cheatsheet (Updated)

---

#### 1. Setup & Core Commands

**Install Libraries**
Install all necessary libraries from your terminal.

```bash
pip install streamlit pandas matplotlib seaborn altair plotly geopandas folium streamlit-folium
```

**Run Your App**
Save your code as a Python file (e.g., `app.py`) and run:

```bash
streamlit run app.py
```

---

#### 2. Displaying Text & Data

Use these functions to add titles, text, and data tables to your app.

- **`st.title()`**: Display a title.
- **`st.header()`**: Display a section header.
- **`st.subheader()`**: Display a sub-header.
- **`st.write()`**: A versatile command to display text, Markdown, or variables.
- **`st.dataframe(df)`**: Display a Pandas DataFrame as an interactive table.

---

#### 3. App Layout

- **`st.sidebar.*`**: Place any widget or element into a collapsible sidebar for controls and navigation.
  ```python
  # Place a selectbox in the sidebar
  option = st.sidebar.selectbox(
      "Which chart would you like to see?",
      ("Bar Chart", "Scatter Plot")
  )
  ```

---

#### 4. Interactive Widgets

Use widgets to get input from the user. The user's selection is returned as a variable that you can use to filter data.

- **`st.button("Label")`**: Creates a button.
- **`st.checkbox("Label")`**: Creates a checkbox.
- **`st.multiselect("Label", options, default=...)`**: Select multiple items from a list.
- **`st.selectbox("Label", options)`**: Select a single item from a list.
- **`st.slider("Label", min_value, max_value, value)`**: Select a value from a range.

---

#### 5. Charting & Visualization

Streamlit can display charts from many popular Python libraries.

- **Native Streamlit Charts**

  - Description: Simple, built-in charts for quick visualizations.
  - Example: `st.bar_chart(df)`

- **Matplotlib**

  - Command: **`st.pyplot(fig)`**
  - Description: Used for a wide variety of static charts.
  - Example (Bar & Pie):

    ```python
    import matplotlib.pyplot as plt
    # Bar chart
    fig1, ax1 = plt.subplots()
    ax1.bar(categories, values)
    st.pyplot(fig1)

    # Pie chart
    fig2, ax2 = plt.subplots()
    ax2.pie(sizes, labels=labels, autopct='%1.1f%%')
    st.pyplot(fig2)
    ```

- **Altair (for Interactive & Linked Views)**

  - Command: **`st.altair_chart(chart)`**
  - Description: Best for declarative, interactive, and linked visualizations.

  - **Simple Interactive Chart**: Use `.interactive()` to enable pan and zoom, and `tooltip` for hover details.

    ```python
    import altair as alt
    chart = alt.Chart(df).mark_circle().encode(
        x='fare:Q',
        y='tip:Q',
        tooltip=['pickup_borough', 'fare', 'tip']
    ).interactive()
    st.altair_chart(chart)
    ```

  - **Linked View 1: Brushing & Filtering**: A selection in one chart filters another.

    ```python
    selection = alt.selection_interval() # Create a selection brush

    scatter = alt.Chart(df).mark_point().encode(
        x='tip:Q', y='fare:Q'
    ).add_params(selection) # Add brush to the scatter plot

    bars = alt.Chart(df).mark_bar().encode(
        x='count()', y='pickup_borough:N'
    ).transform_filter(selection) # Filter bars based on brush

    st.altair_chart(scatter | bars) # Display charts side-by-side
    ```

  - **Linked View 2: Highlighting**: Clicking one chart highlights corresponding data in another.

    ```python
    selection = alt.selection_point(fields=['pickup_borough'])

    bars = alt.Chart(df).mark_bar().encode(
        y='pickup_borough:N',
        x='count()',
        # Change color based on selection
        color=alt.condition(selection, 'pickup_borough:N', alt.value('lightgray'))
    ).add_params(selection)

    scatter = alt.Chart(df).mark_point().encode(
        x='tip:Q', y='fare:Q'
    ).transform_filter(selection)

    st.altair_chart(bars | scatter)
    ```

- **Plotly**

  - Command: **`st.plotly_chart(fig)`**
  - Description: Good for high-dimensional plots like Parallel Coordinates.
  - Example:
    ```python
    import plotly.express as px
    fig = px.parallel_coordinates(df, color="payment")
    st.plotly_chart(fig)
    ```

- **Seaborn**
  - Command: **`st.pyplot(fig)`**
  - Description: Used with Matplotlib for statistical plots like heatmaps.
  - Example:
    ```python
    import seaborn as sns
    fig, ax = plt.subplots()
    sns.heatmap(df_corr, ax=ax, annot=True)
    st.pyplot(fig)
    ```

---

#### 6. Geospatial Visualization (Maps)

- **GeoPandas & Folium**

  - Command: **`st_folium(map_object)`**
  - Description: Renders a fully interactive Folium map in Streamlit.
  - Example (Choropleth Map):

    ```python
    import geopandas as gpd
    import folium
    from streamlit_folium import st_folium

    # Load geospatial data
    world = gpd.read_file("path/to/your.geojson")
    world['dummy_data'] = world.index * 10 # Add data to map

    # Create a map centered on a location
    m = folium.Map(location=[0, 0], zoom_start=2)

    # Create and add the choropleth layer
    folium.Choropleth(
        geo_data=world,
        data=world,
        columns=['name', 'dummy_data'],
        key_on='feature.properties.name', # Link GeoJSON properties to data
        legend_name='Dummy Data Values'
    ).add_to(m)

    # Display map in Streamlit
    st_folium(m)
    ```
