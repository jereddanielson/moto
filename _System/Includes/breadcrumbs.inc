    {module_breadcrumbs collection="thebreadcrumbs" template=""}
    <section class="breadcrumps-container">
        <div class="row">
            <div class="medium-12 columns">
                <nav aria-label="You are here:" role="navigation">
                    <ul class="breadcrumbs">
                        <li><a href="/">Home</a></li>
                        {% for item in thebreadcrumbs.items reversed -%}
                           {% if forloop.last -%}
                               <li class="current">{{item.name}}</li>
                           {% else -%}
                                <li><a href="{{item.url}}">{{item.name}}</a></li>
                           {% endif -%}
                        {% endfor -%}
                        <pre>
                       
</pre>
                    </ul>
                </nav>
                <hr>
            </div>
        </div>
    </section>