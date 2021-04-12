import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

@Injectable()
export class RoutesService {
  create(createRouteDto: CreateRouteDto) {
    return 'This action adds a new route';
  }

  findAll() {
    return [
      {
        title: 'Route 1',
        startPosition: {
          lat: -15.82594,
          lng: -47.92923,
        },
        endPosition: {
          lat: -15.82648,
          lng: -47.9238,
        },
      },
      {
        title: 'Route 2',
        startPosition: {
          lat: -15.82649,
          lng: -47.92363,
        },
        endPosition: {
          lat: -15.82816,
          lng: -47.92227,
        },
      },
      {
        title: 'Route 3',
        startPosition: {
          lat: -15.82824,
          lng: -47.92227,
        },
        endPosition: {
          lat: -15.82951,
          lng: -47.92406,
        },
      },
      {
        title: 'Route 4',
        startPosition: {
          lat: -15.82449,
          lng: -47.92756,
        },
        endPosition: {
          lat: -15.82812,
          lng: -47.92692,
        },
      },
      {
        title: 'Route 5',
        startPosition: {
          lat: -15.82331,
          lng: -47.92588,
        },
        endPosition: {
          lat: -15.82758,
          lng: -47.92532,
        },
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
