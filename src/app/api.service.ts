import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConstants } from 'src/constants/apiConstants';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private REST_API_SERVER = ApiConstants.apiUrl;
  constructor(private httpClient: HttpClient) { }

  public getScreens(){
    return this.httpClient.get(this.REST_API_SERVER+'/api/screens-list');
  }

  public getScreenDetails(id: any){
    return this.httpClient.get(this.REST_API_SERVER+'/api/screens-details/'+id);
  }

  public getServiceDetails(service: any){
    return this.httpClient.get(this.REST_API_SERVER+'/api/services-list/'+service);
  }
  public getCarouselDetails(screen: any){
    return this.httpClient.get(this.REST_API_SERVER+'/api/carousel-list/'+screen);
  }

  public getScreenBasicInfo(screen){
    return this.httpClient.get(this.REST_API_SERVER+'/api/basicinfo-list/'+screen);
  }

  public getCompanyInfo(){
    return this.httpClient.get(this.REST_API_SERVER+'/api/get-company-details');
  }

  public getTeamMemberList(){
    return this.httpClient.get(this.REST_API_SERVER+'/api/get-team-member-list');
  }
  public addService(body: any){
    return this.httpClient.post(this.REST_API_SERVER+'/api/add-service',body);
  }
  public getFAQDetails(){
    return this.httpClient.get(this.REST_API_SERVER+'/api/get-all-faq-list');
  }
  public addSubscriber(body: any){
    return this.httpClient.post(this.REST_API_SERVER+'/api/add-subscriber',body);
  }
  public sendEmail(body: any){
    return this.httpClient.post(this.REST_API_SERVER+'/api/send-email',body);
  }

  public scheduleMeeting(body: any){
    return this.httpClient.post(this.REST_API_SERVER+'/api/schedule-meeting',body);
  }
}
