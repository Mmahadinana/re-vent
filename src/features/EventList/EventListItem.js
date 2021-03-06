import React, { Component } from 'react';
import { Segment, Item, Button, List, Icon } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendies';

class EventListItem extends Component {
    render() {
        const {event, selectedEvent, deleteEvent} = this.props;
        return (
                 <Segment.Group>
                    <Segment>
                      <Item.Group>
                        <Item>
                          <Item.Image as='a' size='mini' circular src={this.props.event.hostPhotoURL}/>
                          <Item.Content>
                            <Item.Header as="a">{event.title}</Item.Header>
                            <Item.Description>
                              Hosted by <a>{event.hostedBy}</a>
                            </Item.Description>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                    </Segment>
                    <Segment>
                      <span>
                        <Icon name="clock" /> {event.date} |
                        <Icon name="marker" /> {event.venue}
                      </span>
                    </Segment>
                    <Segment secondary>
                      <List horizontal>
                          {event.attendees && event.attendees.map(attendee => (
                              <EventListAttendee key={attendee.id} attendee={attendee}/>
                          ))}
                    
                      </List>
                    </Segment>
                    <Segment clearing>
                        <span>{event.description}</span>
                      <Button  as="a" color="red" floated="right" content="Delete" onClick={() =>deleteEvent(event.id)} />
                      <Button  as="a" color="teal" floated="right" content="View" onClick={() =>selectedEvent(event)} />

                    </Segment>
                  </Segment.Group>

        )
    }
}

export default EventListItem;