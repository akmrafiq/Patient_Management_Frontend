import { Injectable, Type } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private options: NgbModalOptions;

  constructor(private ngbModal: NgbModal) {
    this.options = {
      backdrop: 'static',
      keyboard: false,
      size: 'lg',
      scrollable:true,
    };
  }

  async open<T, R>(
    component: Type<T>,
    config?: Partial<T>,
    options?: NgbModalOptions
  ): Promise<R> {
    let opt = {
      ...this.options,
      ...options,
    } as NgbModalOptions;

    const modal = this.ngbModal.open(component, opt);
    Object.assign(modal.componentInstance, config);
    return modal.result;
  }
}
