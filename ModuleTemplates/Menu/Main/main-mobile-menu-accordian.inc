  {% for m in this.items -%}
  <li {% if m.css != "" -%}class="{{m.css}}"{% endif -%}><a {% if m.targetFrame != "" -%}target="{{m.targetFrame}}"{% endif -%} href="{{m.url}}">{{m.label}}</a> {% if m.items -%}
    <ul class="menu vertical nested">
      {% for s in m.items -%}
      <li {% if s.css != "" -%}class="{{s.css}}"{% endif -%}><a {% if s.targetFrame != "" -%}target="{{s.targetFrame}}"{% endif -%} href="{{s.url}}">{{s.label}}</a> {% if s.items -%}
        <ul class="menu vertical nested">
          {% for t in s.items -%}
          <li {% if t.css != "" -%}class="{{t.css}}"{% endif -%}><a {% if t.targetFrame != "" -%}target="{{t.targetFrame}}"{% endif -%} href="{{t.url}}">{{t.label}}</a> </li>
          {% endfor -%}
        </ul>
        {% endif -%} </li>
      {% endfor -%}
    </ul>
    {% endif -%} </li>
  {% endfor -%}