---
layout: default
title: Lab Sessions - Data Visualization
---

# Lab Sessions

A comprehensive cheat sheet of Python codes, structured by the lab sessions, will equip students for their final exam. This guide provides a quick reference to the essential commands and functions for data visualization using libraries like Streamlit, Matplotlib, Seaborn, Pandas, Altair, and Folium.

### Lab 1: Introduction to Data Visualization with Streamlit

This section covers the basics of creating interactive web applications with Streamlit.

* **Core Concepts**:
  * **Running a Streamlit App**: Save your script as a Python file (e.g., `app.py`) and run `streamlit run app.py` in your terminal.
  * **Text Elements**: Use `st.title()`, `st.header()`, and `st.write()` to display text.
  * **Sidebar Navigation**: Create a side menu for navigation using `st.sidebar.title()` and `st.sidebar.selectbox()`.

* **Code Examples**:

  * **Basic App Structure**:

        ```python
        import streamlit as st

        st.title("My First Streamlit App")
        st.write("Welcome to my app!")
        ```

  * **Sidebar and Page Navigation**:

        ```python
        import streamlit as st

        st.sidebar.title("Navigation")
        page = st.sidebar.selectbox("Choose a Page", ["Home", "About"])

        if page == "Home":
            st.header("Home Page")
        elif page == "About":
            st.header("About Page")
        ```

  * **Displaying Images**:

        ```python
        import streamlit as st

        if st.button("Show Image"):
            st.image("image_url.jpg", caption="This is a caption.")
        ```

  * **Interactive Widgets and Basic Plotting**:

        ```python
        import streamlit as st
        import matplotlib.pyplot as plt

        st.sidebar.header("Chart Options")
        quantity = st.sidebar.slider("Select Quantity", 1, 100, 50)
        show_chart = st.sidebar.checkbox("Show Chart")

        if show_chart:
            fig, ax = plt.subplots()
            ax.bar(["Category"], [quantity])
            st.pyplot(fig)
        ```

### Lab 2: Charts with Streamlit

This lab focuses on creating various charts and integrating them into a Streamlit application.

* **Core Concepts**:
  * **Pandas DataFrame**: Use `pandas` to create and manage data.
  * **Chart Integration**: Display charts from libraries like Matplotlib.
  * **Interactivity**: Filter and update charts based on user input from widgets like `st.multiselect` and `st.slider`.

* **Code Examples**:

  * **Displaying a DataFrame**:

        ```python
        import streamlit as st
        import pandas as pd

        data = {'col1': [1, 2, 3], 'col2': [10, 20, 30]}
        df = pd.DataFrame(data)
        st.dataframe(df)
        ```

  * **Bar and Pie Charts with Matplotlib**:

        ```python
        import streamlit as st
        import pandas as pd
        import matplotlib.pyplot as plt

        data = {'Category': ['A', 'B', 'C'], 'Values': [10, 30, 20]}
        df = pd.DataFrame(data)

        # Bar Chart
        fig1, ax1 = plt.subplots()
        ax1.bar(df['Category'], df['Values'])
        st.pyplot(fig1)

        # Pie Chart
        fig2, ax2 = plt.subplots()
        ax2.pie(df['Values'], labels=df['Category'], autopct='%1.1f%%')
        st.pyplot(fig2)
        ```

  * **Interactive Filtering**:

        ```python
        import streamlit as st
        import pandas as pd

        # Sample data
        data = {'Product': ['A', 'B', 'C', 'A', 'B'], 'Sales': [100, 150, 200, 120, 180]}
        df = pd.DataFrame(data)

        selected_products = st.multiselect("Select Products", df['Product'].unique(), default=df['Product'].unique())
        filtered_df = df[df['Product'].isin(selected_products)]
        st.bar_chart(filtered_df.groupby('Product')['Sales'].sum())
        ```

### Lab 3: Linked Views with Streamlit and Altair

This section explores creating interactive, linked visualizations where a selection in one chart affects another.

* **Core Concepts**:
  * **Altair**: A declarative statistical visualization library for creating complex interactive charts.
  * **Linked Views**: Connect multiple charts to explore data relationships.
  * **Interactive Selections**: Use Altair's selection features to filter data across charts.

* **Code Example**:

  * **Linked Bar and Scatter Plots**:

        ```python
        import streamlit as st
        import pandas as pd
        import altair as alt

        # Sample Data
        data = {'Category': ['A', 'A', 'B', 'B', 'C', 'C'],
                'x': [1, 2, 2, 3, 3, 4],
                'y': [1, 2, 3, 4, 4, 5]}
        df = pd.DataFrame(data)

        # Selection for linking
        selection = alt.selection_multi(fields=['Category'])
        color = alt.condition(selection,
                              alt.Color('Category:N', legend=None),
                              alt.value('lightgray'))

        # Scatter plot
        scatter = alt.Chart(df).mark_point().encode(
            x='x:Q',
            y='y:Q',
            color=color,
            tooltip=['Category', 'x', 'y']
        )

        # Bar chart
        bars = alt.Chart(df).mark_bar().encode(
            x='count()',
            y='Category:N',
            color=color
        ).add_selection(
            selection
        )

        st.altair_chart(scatter | bars)
        ```

### Lab 4: Exploratory vs. Presentation Graphics with Altair

This lab distinguishes between interactive charts for data exploration and static charts for clear presentation.

* **Core Concepts**:
  * **Exploratory Graphics**: Interactive charts that allow users to delve into the data.
  * **Presentation Graphics**: Static charts that convey a specific message clearly.
  * **Altair for Both**: Use Altair for creating both types of visualizations.

* **Code Examples**:

  * **Exploratory Scatter Plot**:

        ```python
        import streamlit as st
        import pandas as pd
        import altair as alt

        # Sample Data
        data = {'x': range(10), 'y': [i**2 for i in range(10)], 'category': ['A']*5 + ['B']*5}
        df = pd.DataFrame(data)

        chart = alt.Chart(df).mark_circle(size=60).encode(
            x='x',
            y='y',
            color='category',
            tooltip=['x', 'y', 'category']
        ).interactive()

        st.altair_chart(chart, use_container_width=True)
        ```

  * **Presentation Bar Chart**:

        ```python
        import streamlit as st
        import pandas as pd
        import altair as alt

        data = {'Category': ['A', 'B', 'C'], 'Values': [10, 30, 20]}
        df = pd.DataFrame(data)

        chart = alt.Chart(df).mark_bar().encode(
            x='Category',
            y='Values'
        ).properties(
            title='Value per Category'
        )
        st.altair_chart(chart, use_container_width=True)
        ```

### Lab 5: High-Dimensional Data Visualization

This section covers advanced techniques for visualizing datasets with multiple variables.

* **Core Concepts**:
  * **Seaborn and Plotly**: Libraries for creating complex and aesthetically pleasing visualizations.
  * **High-Dimensional Techniques**: Use mosaic plots, trellis displays, heatmaps, parallel coordinate plots, and 3D scatter plots to explore multivariate data.

* **Code Examples**:

  * **Heatmap with Seaborn**:

        ```python
        import streamlit as st
        import pandas as pd
        import seaborn as sns
        import matplotlib.pyplot as plt

        # Sample data
        data = pd.DataFrame([[1, 2, 3], [4, 5, 6], [7, 8, 9]], columns=['A', 'B', 'C'])

        fig, ax = plt.subplots()
        sns.heatmap(data, annot=True, ax=ax)
        st.pyplot(fig)
        ```

  * **Parallel Coordinate Plot with Plotly**:

        ```python
        import streamlit as st
        import pandas as pd
        import plotly.express as px

        # Sample data from Seaborn
        df = px.data.iris()

        fig = px.parallel_coordinates(df, color="species_id",
                                      labels={"species_id": "Species",
                                              "sepal_width": "Sepal Width",
                                              "sepal_length": "Sepal Length",
                                              "petal_width": "Petal Width",
                                              "petal_length": "Petal Length"},
                                      color_continuous_scale=px.colors.diverging.Tealrose,
                                      color_continuous_midpoint=2)
        st.plotly_chart(fig)
        ```

### Lab 6 & 7: Geospatial Visualization

These labs focus on creating maps to visualize geographical data.

* **Core Concepts**:
  * **GeoPandas**: Extends pandas to allow spatial operations on geometric types.
  * **Folium**: A library for creating interactive maps.
  * **Choropleth Maps**: Maps where areas are shaded in proportion to a statistical variable.
  * **Map Projections**: Different ways of representing the Earth's surface on a flat map.

* **Code Examples**:

  * **Basic Map with Folium**:

        ```python
        import streamlit as st
        import folium
        from streamlit_folium import folium_static

        m = folium.Map(location=[45.5236, -122.6750], zoom_start=13)
        folium.Marker([45.5236, -122.6750], popup="Portland, OR").add_to(m)

        folium_static(m)
        ```

  * **Choropleth Map**:

        ```python
        import streamlit as st
        import geopandas as gpd
        import pandas as pd
        import folium
        from streamlit_folium import folium_static

        # Load GeoJSON and data
        # world = gpd.read_file(gpd.datasets.get_path('naturalearth_lowres'))
        # data = pd.read_csv('country_data.csv')
        # world_data = world.merge(data, how="left", left_on="name", right_on="country")

        # For demonstration purposes, creating dummy data
        world = gpd.read_file(gpd.datasets.get_path('naturalearth_lowres'))
        world['dummy_data'] = world.index * 10

        m = folium.Map(location=[0, 0], zoom_start=2)

        folium.Choropleth(
            geo_data=world,
            name='choropleth',
            data=world,
            columns=['iso_a3', 'dummy_data'],
            key_on='feature.id',
            fill_color='YlGn',
            fill_opacity=0.7,
            line_opacity=0.2,
            legend_name='Dummy Data'
        ).add_to(m)

        folium_static(m)
        ```
