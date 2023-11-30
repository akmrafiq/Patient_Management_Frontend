import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPagination, Globals } from 'src/app/shared/models/Pagination';
import { Patient } from 'src/app/shared/models/Patient';
import { ModalService } from 'src/app/shared/services/modal.service';
import { PatientService } from 'src/app/shared/services/patient.service';
import { CreatePatientComponent } from '../create-patient/create-patient.component';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  @ViewChild('search', { static: false }) searchTerm: ElementRef | undefined;
  patients: any[] = [];
  page: IPagination = { count: Globals.PageCount, pageNo: Globals.PageNo, pageSize: Globals.PageSize, searchText: "" };

  constructor(private service: PatientService,
    private modalService: ModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.service.get().subscribe({
      next: res => {
        this.patients= res
      }
    })
  }

  onUpdate(id:string){

  }

  onSearchButtonClicked() {
    this.get();
  }

  onAddButtonClick() {

  }
}
