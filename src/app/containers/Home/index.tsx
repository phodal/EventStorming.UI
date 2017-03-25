import * as React from 'react';
import {EventBusiness, EventEntity, EventStickyRender, EventSubscriber} from 'eventstorming';
const style = require('./style.css');

class Home extends React.Component<any, any> {
  public render() {

    const eventSubscriber = new EventSubscriber();
    const eventStickyRender = new EventStickyRender(eventSubscriber);

    const eventBusiness = new EventBusiness(eventSubscriber);
    const subEntity = new EventEntity('sticker had store');

    const eventEntity = eventBusiness.createEventSticky('event had created');
    eventEntity.addRelatedChild(subEntity);
    eventBusiness.updateEventSticky(eventEntity);

    eventBusiness.createEventSticky('sticky had created');
    eventBusiness.createEventSticky('sticky had rendered');

    const result = eventStickyRender.render();

    console.log(result);

    return (
      <div className={style.Home}>
        <img src={require('./barbar.png')} />
        <p>Hello!</p>
      </div>
    );
  }
}

export { Home }
