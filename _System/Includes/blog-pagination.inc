{% comment -%}
    This blog pagination include file is a beta version and not guaranteed to work. 
    We have tested it as much as we can but sometimes it has to be in production before potential problems show up. 
    If you have trouble with it let us know and we will try to update it, or just go back to the built in BC pagination.
    Dave Haggblad - BC Gurus March 2016
{% endcomment -%}
   
   
<ul class="pagination text-center" role="navigation" aria-label="Pagination">
    {% if pagination.previousPageUrl and pagination.previousPageUrl != "" -%}
        <li class="pagination-previous"><a href="{{pagination.previousPageUrl}}" aria-label="Previous Page">Previous <span class="show-for-sr">page</span></a></li>
    {% else -%}
        <li class="pagination-previous disabled">Previous <span class="show-for-sr">page</span></li>
    {% endif -%}

    {% assign preEllipsis = false -%}
    {% assign postEllipsis = false -%}
    {% for i in (1..pagination.numberOfPages) -%}
        {% assign efinish = pagination.numberOfPages | minus: 0 -%}
        {% assign overlap = pagination.currentPage | plus: 2 -%}
        {% assign underlap = pagination.currentPage | minus: 2 -%}

        {% if i == pagination.currentPage -%}
            <li class="current"><span class="show-for-sr">You're on page</span> {{i}}</li>
        {% elseif i > 1 and i < underlap and pagination.numberOfPages > 10 and efinish > i -%}
            {% if preEllipsis == false -%}
                <li class="ellipsis" aria-hidden="true"></li>
                {% assign preEllipsis = true -%}
            {% endif -%}
        {% elseif i > pagination.currentPage and i > overlap and pagination.numberOfPages > 10 and efinish > i  -%}
            {% if postEllipsis == false -%}
                <li class="ellipsis" aria-hidden="true"></li>
                {% assign postEllipsis = true -%}
            {% endif -%}
        {% else -%}
            <li><a href="/media/page/{{i}}/" aria-label="Page {{i}}">{{i}}</a></li>
        {% endif -%}
    {% endfor -%}

    {% if pagination.nextPageUrl and pagination.nextPageUrl != "" -%}
        <li class="pagination-next"><a href="{{pagination.nextPageUrl}}" aria-label="Next page">Next <span class="show-for-sr">page</span></a></li>
    {% else -%}
        <li class="pagination-next disabled">Next <span class="show-for-sr">page</span></li>
    {% endif -%}
</ul>