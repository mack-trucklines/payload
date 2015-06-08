(ns payload.core
  (:require [reagent.core :as r]))

(def trigger (r/atom true))
(def pro (r/atom ""))
(def date (r/atom ""))
(def trk (r/atom ""))
(def origin (r/atom ""))
(def destination (r/atom ""))
(def revenue (r/atom 0))
(def total-revenue (r/atom 0))
(def advances (r/atom 0))
(def expenses (r/atom 0))
(def hours (r/atom 0))
(def total-hours (r/atom 0))
(def fuel (r/atom 0))
(def total-fuel (r/atom 0))
(def per-dm (r/atom 0))
(def total-per-dm (r/atom 0))
(def stops (r/atom 0))
(def total-stops (r/atom 0))
(def dh (r/atom 0))
(def total-dh (r/atom 0))
(def loaded (r/atom 0))
(def total-loaded (r/atom 0))
(def mi (r/atom 0))
(def total-mi (r/atom 0))
(def submitted (r/atom (sorted-map)))

(def counter (atom 2))

(defn add-input
  [input]
  (let [id (swap! counter inc)
        input-with-id (assoc input :id id)]
    (swap! submitted assoc id input-with-id)))

(defn input
  [type at int?]
  [:input {:type type
           :value @at
           :on-change #(if int?
                          (reset! at (int (-> % .-target .-value)))
                          (reset! at (-> % .-target .-value)))}])

(defn header
  []
  [:tbody
    [:tr
      [:td {:colSpan 1}
       "Settlement #:"]
      [:td {:colSpan 6}
       [:input {:type "text"}]]
      [:td {:colSpan 1}
         "Gross Pay:"]
      [:td {:colSpan 6}
       @total-revenue]]
    [:tr
      [:td {:colSpan 1}
       "Driver's name:"]
      [:td {:colSpan 6}
       [:input {:type "text"}]]
      [:td {:colSpan 1}
       "- Advances:"]
      [:td {:colSpan 6}
       [input "text" advances true]]]
    [:tr
      [:td {:colSpan 1}
       "Pay Type:" ]
      [:td {:colSpan 6}
       [:input {:type "text"}]]
      [:td {:colSpan 1}
       "+ Expenses:"]
      [:td {:colSpan 6}
       [input "text" expenses true]]]
    [:tr
      [:td {:colSpan 1}
       "Pay Rate:"]
      [:td {:colSpan 1}
       [:input {:type "text"}]
      [:td {:colSpan 5} @trk]
      [:td {:colSpan 1}
       "Net Pay:"]
      [:td {:colSpan 6}
       (.log js/console @total-revenue)
       (+ (- (* @total-revenue 0.82) @advances) @expenses)]]]])

(defn heading-row
  []
  [:tr
   [:th "Pro #"]
   [:th "Date"]
   [:th "Trk/Trl"]
   [:th "Origin"]
   [:th "Destination"]
   [:th "Revenue"]
   [:th "Fuel"]
   [:th "Stops"]
   [:th "DH"]
   [:th "Hours"]
   [:th "Loaded"]
   [:th "Tot Mi"]
   [:th "Per Dm"]
   [:th "Total Pay"]])

(defn previous-inputs
  []
  [:tbody
   [:tr @trigger]
   (doall
       (for [[key value] @submitted
             :when (> @counter 0)]
       ^{:key (:id value)}
        [:tr
         [:td (:pro value)]
         [:td (:date value)]
         [:td (:trk value)]
         [:td (:origin value)]
         [:td (:destination value)]
         [:td (:revenue value)]
         [:td (:fuel value)]
         [:td (:stops value)]
         [:td (:dh value)]
         [:td (:hours value)]
         [:td (:loaded value)]
         [:td (:mi value)]
         [:td (:per-dm value)]
         [:td (* (:revenue value) 0.92)]]))
   ])

(defn input-row
  []
  [:tr
   [:td [input "type" pro true]]
   [:td [input "date" date false]]
   [:td [input "number" trk true]]
   [:td [input "text" origin false]]
   [:td [input "text" destination false]]
   [:td [input "text" revenue true]]
   [:td [input "text" fuel true]]
   [:td [input "text" stops true]]
   [:td [input "text" dh true]]
   [:td [input "text" hours true]]
   [:td [input "text" loaded true]]
   [:td [input "text" mi true]]
   [:td [input "text" per-dm true]]
   [:td (* @revenue 0.92)]
   ])


(defn total-row
  []
  [:tr
   [:td {:colSpan 5}]
   [:td (+ @total-revenue @revenue)]
   [:td]
   [:td (+ @total-stops @stops)]
   [:td (+ @total-dh @dh)]
   [:td (+ @total-hours @hours)]
   [:td (+ @total-loaded @loaded)]
   [:td (+ @total-mi @mi)]
   [:td (+ @total-per-dm @per-dm)]
   [:td (* 0.92 (+ @total-revenue @revenue))]])

(defn handle-click
  [input-attrs]
   (reset! total-revenue (+ @total-revenue @revenue))
   (reset! total-stops (+ @total-stops @stops))
   (reset! total-dh (+ @total-dh @dh))
   (reset! total-hours (+ @total-hours @hours))
   (reset! total-fuel (+ @total-fuel @fuel))
   (reset! total-mi (+ @total-mi @mi))
   (reset! total-loaded (+ @total-loaded @loaded))
   (reset! total-per-dm (+ @total-per-dm @per-dm))
   (reset! pro "")
   (reset! trk "")
   (reset! origin "")
   (reset! destination "")
   (reset! revenue "")
   (reset! stops "")
   (reset! dh "")
   (reset! hours "")
   (reset! fuel "")
   (reset! mi "")
   (reset! loaded "")
   (reset! per-dm "")
   (add-input input-attrs)
   (reset! trigger (not @trigger)))

(defn button
  []
  (let [pro-val @pro
        date-val @date
        trk-val @trk
        origin-val @origin
        destination-val @destination
        revenue-val @revenue
        stops-val @stops
        fuel-val @fuel
        dh-val @dh
        hours-val @hours
        loaded-val @loaded
        mi-val @mi
        per-dm-val @per-dm
        mi-val @mi]
    [:button
     {:on-click #(handle-click {:pro pro-val
                                :date date-val
                                :trk trk-val
                                :origin origin-val
                                :destination destination-val
                                :revenue revenue-val
                                :stops stops-val
                                :fuel fuel-val
                                :dh dh-val
                                :hours hours-val
                                :loaded loaded-val
                                :per-dm per-dm-val
                                :mi mi-val})} "Add row"]))

(defn full
  []
  (fn []
  [:div
   [:table
     [header]
     [heading-row]
     [previous-inputs]
     [input-row]
     [total-row]]
     [button]]))

(defn start
  "Mounts the necessary reagent component to document element with id 'id'"
  []
  (r/render [full] (.getElementById js/document "app")))

(start)
